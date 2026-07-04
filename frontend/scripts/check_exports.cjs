const fs = require('fs');
const path = require('path');
const glob = require('glob');
const root = path.join(__dirname, '../src');
const files = glob.sync('**/*.{js,jsx}', { cwd: root });

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function getExports(src) {
  const defs = [];
  const names = [];
  const defaultRegex = /export\s+default\s+(function|const|class|\(|\{)?\s*([A-Za-z0-9_]+)/g;
  const namedRegex = /export\s+(?:const|let|var|function|class)\s+([A-Za-z0-9_]+)/g;
  const exportListRegex = /export\s*\{\s*([^}]+)\s*\}/g;
  let m;
  while ((m = defaultRegex.exec(src))) {
    defs.push(m[2] || 'default');
  }
  while ((m = namedRegex.exec(src))) {
    names.push(m[1]);
  }
  while ((m = exportListRegex.exec(src))) {
    m[1].split(',').map(x => x.trim().split(' as ')[0].trim()).forEach(n => names.push(n));
  }
  return { defs, names };
}

function parseImports(src) {
  const imports = [];
  const importRegex = /import\s+(.+)\s+from\s+['\"](.+)['\"]/g;
  let m;
  while ((m = importRegex.exec(src))) {
    const spec = m[1].trim();
    const source = m[2].trim();
    imports.push({ spec, source });
  }
  return imports;
}

const report = [];
for (const file of files) {
  const src = read(file);
  const imports = parseImports(src);
  for (const imp of imports) {
    if (!imp.source.startsWith('./') && !imp.source.startsWith('../')) continue;
    let target = path.join(path.dirname(file), imp.source);
    if (!path.extname(target)) {
      const candidates = [target + '.js', target + '.jsx', path.join(target, 'index.js'), path.join(target, 'index.jsx')];
      target = candidates.find(f => fs.existsSync(path.join(root, f)));
    } else if (!fs.existsSync(path.join(root, target))) {
      continue;
    }
    if (!target) continue;
    const targetSrc = read(path.relative('', path.join(root, target)) || target);
    const exp = getExports(targetSrc);
    if (imp.spec.startsWith('{')) {
      const names = imp.spec.replace(/[{}]/g, '').split(',').map(x => x.trim().split(' as ')[0].trim());
      names.forEach(name => {
        if (!exp.names.includes(name) && !exp.defs.includes(name)) {
          report.push({file, target, type:'named', name, exp});
        }
      });
    } else if (imp.spec.startsWith('*')) {
      // skip namespace imports
    } else {
      const name = imp.spec;
      if (name !== 'React' && name !== 'PropTypes') {
        if (!exp.defs.includes(name)) {
          report.push({file, target, type:'default', name, exp});
        }
      }
    }
  }
}
if (report.length === 0) {
  console.log('No obvious default/named export mismatches found.');
} else {
  console.log('Potential mismatches:');
  report.forEach(r => {
    console.log(`${r.file} imports ${r.name} from ${r.target} (${r.type}) but target exports default: [${r.exp.defs}] named: [${r.exp.names}]`);
  });
}

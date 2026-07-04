const fs = require('fs');
const path = require('path');
const root = path.resolve('src');
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (p.endsWith('.js') || p.endsWith('.jsx')) files.push(p);
  }
}
walk(root);
const importRegex = /import\s+(.*?)\s+from\s+['"]([^'"]+)['"]/g;
const defaultExportRegex = /export\s+default\s+(?:function|class|const|let|var)?\s*([A-Za-z0-9_]+)/g;
const namedExportRegex = /export\s+(?:const|let|var|function|class)\s+([A-Za-z0-9_]+)/g;
const exportListRegex = /export\s*\{\s*([^}]+)\s*\}/g;
function parseExports(src) {
  const defs = [];
  const names = [];
  let m;
  while ((m = defaultExportRegex.exec(src))) defs.push(m[1] || 'default');
  while ((m = namedExportRegex.exec(src))) names.push(m[1]);
  while ((m = exportListRegex.exec(src))) {
    m[1].split(',').map(x => x.trim().split(' as ')[0].trim()).forEach(n => names.push(n));
  }
  return { defs, names };
}
function resolveImport(file, source) {
  if (!source.startsWith('./') && !source.startsWith('../')) return null;
  if (source.match(/\.(png|jpe?g|svg|css|scss|json|txt|webp|gif)$/i)) return null;
  const base = path.dirname(file);
  const target = path.resolve(base, source);
  const candidates = [target, `${target}.js`, `${target}.jsx`, path.join(target, 'index.js'), path.join(target, 'index.jsx')];
  return candidates.find(c => fs.existsSync(c)) || null;
}
const issues = [];
for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  for (const match of src.matchAll(importRegex)) {
    const spec = match[1].trim();
    const source = match[2].trim();
    const target = resolveImport(file, source);
    if (!target) continue;
    const targetSrc = fs.readFileSync(target, 'utf8');
    const exp = parseExports(targetSrc);
    if (spec.startsWith('{')) {
      const names = spec.replace(/[{}]/g, '').split(',').map(x => x.trim().split(' as ')[0].trim());
      for (const name of names) {
        if (name && !exp.names.includes(name) && !exp.defs.includes(name)) {
          issues.push({ file, target, type: 'named', name, exp });
        }
      }
    } else if (!spec.startsWith('*')) {
      const name = spec.split(' as ')[0].trim();
      if (name !== 'React' && !exp.defs.includes(name)) {
        issues.push({ file, target, type: 'default', name, exp });
      }
    }
  }
}
if (issues.length === 0) {
  console.log('No apparent JS/JSX default/named import mismatches found.');
} else {
  issues.forEach(i => console.log(`${i.file} imports ${i.name} (${i.type}) from ${i.target} but exports default: [${i.exp.defs}] named: [${i.exp.names}]`));
}

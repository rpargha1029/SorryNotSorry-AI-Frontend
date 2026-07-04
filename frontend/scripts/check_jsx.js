const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/pages/Landing.jsx');
const src = fs.readFileSync(file, 'utf8');
const tagRegex = /<\s*(\/)?\s*([A-Za-z0-9_.-]+)([^>]*)>/g;
const selfClosingRegex = /\/\s*>\s*$/;
let match;
const stack = [];
let line = 1;
const lines = src.split('\n');
function getLineForIndex(idx) {
  const upTo = src.slice(0, idx);
  return upTo.split('\n').length;
}
while ((match = tagRegex.exec(src)) !== null) {
  const full = match[0];
  const closing = !!match[1];
  const tag = match[2];
  const rest = match[3] || '';
  const idx = match.index;
  const ln = getLineForIndex(idx);
  const selfClosing = selfClosingRegex.test(full) || /\/\s*>$/.test(rest) || /\/>$/.test(full);
  if (!closing && !selfClosing) {
    stack.push({tag, line: ln, idx});
  } else if (closing) {
    if (stack.length === 0) {
      console.log(`Unmatched closing tag </${tag}> at line ${ln}`);
    } else {
      const last = stack[stack.length-1];
      if (last.tag === tag) {
        stack.pop();
      } else {
        console.log(`MISMATCH: closing </${tag}> at line ${ln} but top of stack is <${last.tag}> opened at line ${last.line}`);
        // try to recover by popping until matching tag found
        let found = false;
        for (let i = stack.length-1;i>=0;i--) {
          if (stack[i].tag === tag) { stack.splice(i); found = true; break; }
        }
        if (!found) {
          // ignore
        }
      }
    }
  }
}
if (stack.length) {
  console.log('Unclosed tags at end of file:');
  stack.forEach(s=> console.log(`<${s.tag}> opened at line ${s.line}`));
} else {
  console.log('All tags matched (by simple parser).');
}

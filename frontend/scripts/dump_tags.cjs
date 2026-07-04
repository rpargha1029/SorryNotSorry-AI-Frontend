const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/pages/Landing.jsx');
const src = fs.readFileSync(file, 'utf8');
const tagRegex = /<\s*(\/)?\s*([A-Za-z0-9_.-]+)([^>]*)>/g;
function getLineForIndex(idx) { const upTo = src.slice(0, idx); return upTo.split('\n').length; }
let match;
while ((match = tagRegex.exec(src)) !== null) {
  const full = match[0];
  const closing = !!match[1];
  const tag = match[2];
  const rest = match[3] || '';
  const idx = match.index;
  const ln = getLineForIndex(idx);
  const selfClosing = /\/>\s*$/.test(full);
  if (ln >= 180 && ln <= 360) {
    console.log(`${ln}: ${selfClosing ? 'self' : closing ? 'close' : 'open'} <${tag}> -> ${full.replace(/\n/g,' ')} `);
  }
}

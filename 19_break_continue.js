// 19_break_continue.js
// Demonstrates break and continue

for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // skip 2
  if (i === 4) break; // stop loop
  console.log(i);
}
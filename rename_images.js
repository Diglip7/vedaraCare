const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
const renames = [
  { old: 'Home Health in Dubai.webp', new: 'home-health-in-dubai.webp' },
  { old: 'Doctor on Call.webp', new: 'doctor-on-call.webp' }
];

for (const r of renames) {
  const oldPath = path.join(dir, r.old);
  const newPath = path.join(dir, r.new);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${r.old} to ${r.new}`);
  } else {
    console.log(`File ${r.old} not found`);
  }
}

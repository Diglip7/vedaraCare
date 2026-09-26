const fs = require('fs');
const path = require('path');
const historyDir = 'C:/Users/pc/Documents/vedacare/vedaraCare/VSCodeHistory';
let maxTs = 0;
const folders = fs.readdirSync(historyDir);
for (const folder of folders) {
    const folderPath = path.join(historyDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;
    const entriesPath = path.join(folderPath, 'entries.json');
    if (!fs.existsSync(entriesPath)) continue;
    try {
        const data = JSON.parse(fs.readFileSync(entriesPath, 'utf8'));
        for (const entry of data.entries) {
            if (entry.timestamp > maxTs) {
                maxTs = entry.timestamp;
            }
        }
    } catch(e) {}
}
console.log('Max TS:', maxTs, new Date(maxTs).toLocaleString());

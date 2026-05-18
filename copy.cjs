const fs = require('fs');
const glob = require('glob'); // Note: we can just use fs.readdirSync
const path = require('path');

const srcDir = '/Users/hugogarder_/.gemini/antigravity/brain/9095a3e9-7f05-4caf-9118-551f181ee62e';
const destDir = '/Users/hugogarder_/Desktop/Anti gravity/Susanne Melchiorsen/public';

const files = fs.readdirSync(srcDir);
files.forEach(f => {
  if (f.startsWith('sm_logo_')) fs.copyFileSync(path.join(srcDir, f), path.join(destDir, 'company_logo.png'));
  if (f.startsWith('sm_hero_')) fs.copyFileSync(path.join(srcDir, f), path.join(destDir, 'hero_bg_sm.png'));
  if (f.startsWith('sm_facial_')) fs.copyFileSync(path.join(srcDir, f), path.join(destDir, 'facial_sm.png'));
  if (f.startsWith('sm_products_')) fs.copyFileSync(path.join(srcDir, f), path.join(destDir, 'products_sm.png'));
});

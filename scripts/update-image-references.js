import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the mapping file and products.ts
const MAPPING_FILE = path.join(__dirname, '..', 'image-rename-mapping.json');
const PRODUCTS_FILE = path.join(__dirname, '..', 'src', 'data', 'products.ts');

/**
 * Load the rename mapping
 */
function loadMapping() {
  const content = fs.readFileSync(MAPPING_FILE, 'utf-8');
  return JSON.parse(content);
}

/**
 * Update image references in products.ts
 */
function updateReferences() {
  console.log('Loading mapping file...');
  const mapping = loadMapping();
  console.log(`Loaded ${Object.keys(mapping).length} image mappings\n`);

  console.log('Reading products.ts...');
  let content = fs.readFileSync(PRODUCTS_FILE, 'utf-8');
  const originalContent = content;

  console.log('Updating image references...\n');
  let updateCount = 0;

  // Sort mappings by length (longest first) to avoid partial replacements
  const sortedMappings = Object.entries(mapping).sort(
    (a, b) => b[0].length - a[0].length
  );

  for (const [oldPath, newPath] of sortedMappings) {
    // Escape special regex characters in the path
    const escapedOldPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedOldPath, 'g');
    
    if (content.includes(oldPath)) {
      const matches = content.match(regex);
      const count = matches ? matches.length : 0;
      content = content.replace(regex, newPath);
      updateCount += count;
      console.log(`Updated ${count} occurrence(s): ${oldPath} -> ${newPath}`);
    }
  }

  if (content !== originalContent) {
    console.log(`\nWriting updated products.ts...`);
    fs.writeFileSync(PRODUCTS_FILE, content, 'utf-8');
    console.log(`\nSuccess! Updated ${updateCount} image references in products.ts`);
  } else {
    console.log('\nNo changes needed - all references are already up to date.');
  }
}

/**
 * Main function
 */
function main() {
  try {
    if (!fs.existsSync(MAPPING_FILE)) {
      console.error(`Error: Mapping file not found at ${MAPPING_FILE}`);
      console.error('Please run rename-product-images.js first.');
      process.exit(1);
    }

    if (!fs.existsSync(PRODUCTS_FILE)) {
      console.error(`Error: Products file not found at ${PRODUCTS_FILE}`);
      process.exit(1);
    }

    updateReferences();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();


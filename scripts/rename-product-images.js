import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to exclude from renaming
const EXCLUDED_PATTERNS = [
  'specifications',
  'features',
  'applications',
  'benefits',
  'customisation',
  'packaging',
  'protip',
  'sample',
  'Thumbs.db',
];

// Root directory for products
const PRODUCTS_DIR = path.join(__dirname, '..', 'public', 'products');

// Store mappings of old names to new names
const renameMap = new Map();

/**
 * Check if a file should be excluded from renaming
 */
function shouldExclude(fileName) {
  const lowerName = fileName.toLowerCase();
  return EXCLUDED_PATTERNS.some(pattern => 
    lowerName.includes(pattern.toLowerCase())
  );
}

/**
 * Check if file already has meshco- prefix
 */
function hasMeshcoPrefix(fileName) {
  return fileName.toLowerCase().startsWith('meshco-');
}

/**
 * Rename a file by adding meshco- prefix
 */
function getNewFileName(fileName) {
  if (hasMeshcoPrefix(fileName)) {
    return fileName; // Already has prefix
  }
  return `meshco-${fileName}`;
}

/**
 * Recursively process all image files in a directory
 */
function processDirectory(dirPath, relativePath = '') {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relativeFilePath = path.join(relativePath, entry.name).replace(/\\/g, '/');
    
    if (entry.isDirectory()) {
      // Recursively process subdirectories
      processDirectory(fullPath, relativeFilePath);
    } else if (entry.isFile()) {
      // Check if it's an image file
      const ext = path.extname(entry.name).toLowerCase();
      if (['.webp', '.png', '.jpg', '.jpeg'].includes(ext)) {
        // Check if we should exclude this file
        if (!shouldExclude(entry.name) && !hasMeshcoPrefix(entry.name)) {
          const newFileName = getNewFileName(entry.name);
          const newFullPath = path.join(dirPath, newFileName);
          
          // Store the mapping (using relative path from public/products)
          const oldRelativePath = `/products/${relativeFilePath}`;
          const newRelativePath = `/products/${path.join(relativePath, newFileName).replace(/\\/g, '/')}`;
          
          renameMap.set(oldRelativePath, newRelativePath);
          
          // Rename the file
          console.log(`Renaming: ${entry.name} -> ${newFileName}`);
          fs.renameSync(fullPath, newFullPath);
        } else {
          console.log(`Skipping: ${entry.name} (excluded or already has meshco- prefix)`);
        }
      }
    }
  }
}

/**
 * Main function
 */
function main() {
  console.log('Starting product image renaming...');
  console.log(`Processing directory: ${PRODUCTS_DIR}\n`);
  
  if (!fs.existsSync(PRODUCTS_DIR)) {
    console.error(`Error: Products directory not found at ${PRODUCTS_DIR}`);
    process.exit(1);
  }
  
  // Process all directories
  processDirectory(PRODUCTS_DIR);
  
  console.log(`\nRenaming complete!`);
  console.log(`Total files renamed: ${renameMap.size}`);
  
  // Save the mapping to a JSON file for reference
  const mappingFile = path.join(__dirname, '..', 'image-rename-mapping.json');
  const mappingObject = Object.fromEntries(renameMap);
  fs.writeFileSync(mappingFile, JSON.stringify(mappingObject, null, 2));
  console.log(`\nMapping saved to: ${mappingFile}`);
  console.log('\nNext step: Update code references using the mapping.');
}

main();


/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

function convertImageImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find and replace import statements
  const importRegex = /import\s+(\w+)\s+from\s+["']@\/(?:\.\.\/)*public\/images\/([^"']+)["'];?/g;
  
  content = content.replace(importRegex, (match, importName, imagePath) => {
    // Keep track of the imported name and path for later replacement
    return `// Converted image import: ${importName} -> ${imagePath}`;
  });
  
  // Replace usage of imported images with Image component
  const imageUsageRegex = /<img[^>]*src={([^}]+)}[^>]*>/g;
  
  content = content.replace(imageUsageRegex, (match, imageName) => {
    return `<Image\n  src="/images/${imageName}"\n  alt=""\n  width={500}\n  height={300}\n  className="your-classes-here"\n/>`;
  });
  
  fs.writeFileSync(filePath, content);
}

// Function to recursively process all .tsx files
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx')) {
      convertImageImports(fullPath);
    }
  });
}

// Run the script on your src directory
processDirectory('./src');
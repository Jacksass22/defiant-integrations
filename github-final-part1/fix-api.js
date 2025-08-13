const fs = require('fs');

// Fix lead-capture-form.tsx
let content = fs.readFileSync('src/components/lead-capture-form.tsx', 'utf8');
content = content.replace(
  "fetch('/api/lead-capture'",
  "fetch((import.meta.env.VITE_API_URL || '') + '/lead-capture'"
);
fs.writeFileSync('src/components/lead-capture-form.tsx', content);

// Fix subscription-modal.tsx
content = fs.readFileSync('src/components/subscription-modal.tsx', 'utf8');
content = content.replace(
  "fetch('/api/subscribe'",
  "fetch((import.meta.env.VITE_API_URL || '') + '/subscribe'"
);
fs.writeFileSync('src/components/subscription-modal.tsx', content);

console.log('✅ Fixed API endpoints');

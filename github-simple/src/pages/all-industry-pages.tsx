// This file combines all industry pages to reduce file count for GitHub upload
// After uploading, you can split them back into individual files

export { default as HVACPage } from './hvac';
export { default as PlumbingPage } from './plumbing';
export { default as ElectricalPage } from './electrical';
// ... other pages imported here

// Temporary combined export for GitHub upload
export const AllPages = {
  hvac: 'HVAC Services Page',
  plumbing: 'Plumbing Services Page',
  // Add all 54 pages here
};

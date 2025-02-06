// imageImports.ts

// Define folder-specific image counts
const IMAGE_COUNTS = {
  aerialDrone: 17, // Update with actual count
  exterior: 4, // Update with actual count
  interior: 36, // Update with actual count
  renovation: 18, // Update with actual count
  staging: 61, // Update with actual count
};

// Generate arrays of image paths
export const aerialDronePaths = Array.from(
  { length: IMAGE_COUNTS.aerialDrone },
  (_, i) =>
    `/assets/portfolio/images/aerial drone/Virtual Xposure - Aerial Drone Image - (${
      i + 1
    }).webp`
);

export const exteriorPaths = Array.from(
  { length: IMAGE_COUNTS.exterior },
  (_, i) =>
    `/assets/portfolio/images/exterior/Virtual Xposure - Exterior Image - (${
      i + 1
    }).webp`

);

export const interiorPaths = Array.from(
  { length: IMAGE_COUNTS.interior },
  (_, i) =>
    `/assets/portfolio/images/interior/Virtual Xposure - Interior Image - (${
      i + 1
    }).webp`

);

export const virtualRenovationPaths = Array.from(
  { length: IMAGE_COUNTS.renovation },
  (_, i) =>
    `/assets/portfolio/virtual-renovation-images/DEMO_ (${i + 1}).webp`
);

export const virtualStagingPaths = Array.from(
  { length: IMAGE_COUNTS.staging },
  (_, i) =>
    `/assets/portfolio/virtual-staging-images/DEMO_ (${i + 1}).webp`
);

// Combine all paths if needed
export const allImagePaths = [
  ...aerialDronePaths,
  ...exteriorPaths,
  ...interiorPaths,
  ...virtualRenovationPaths,
  ...virtualStagingPaths,
];

// Export categories object
export const imageCategories = {
  aerialDrone: aerialDronePaths,
  exterior: exteriorPaths,
  interior: interiorPaths,
  virtualRenovation: virtualRenovationPaths,
  virtualStaging: virtualStagingPaths,
};

import * as THREE from 'three';

export default function createStarfield({ numStars = 500, radius = 50 } = {}) {
  // Random point on a sphere
  function randomSpherePoint(radius) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  // Create the geometry for the stars
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const colors = [];

  for (let i = 0; i < numStars; i++) {
    // Generate star positions and colors
    const position = randomSpherePoint(radius);
    vertices.push(position.x, position.y, position.z);

    // Generate a random color for the star
    const color = new THREE.Color();
    color.setHSL(0.6, 0.5, Math.random() * 0.5 + 0.5); // Hue, Saturation, Lightness
    colors.push(color.r, color.g, color.b);
  }

  // Set the vertices and colors in the geometry
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  // Create material for the stars
  const material = new THREE.PointsMaterial({
    size: 0.3,
    vertexColors: true, // Use the per-vertex colors from geometry
  });

  // Load texture if available
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(
    './textures/stars/circle.png', // Texture path
    (texture) => {
      material.map = texture; // Assign texture to the material
      material.transparent = true; // Enable transparency if texture has alpha
      material.alphaTest = 0.5; // Adjust alpha threshold for transparency
    },
    undefined,
    (error) => {
      console.error("Error loading texture", error); // Fallback on texture load failure
    }
  );

  // Create points using geometry and material
  const starfield = new THREE.Points(geometry, material);

  return starfield; // Return the starfield object
}

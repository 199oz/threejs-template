// objectsSetup.js
import * as THREE from 'three';

/**
 * Creates a plane that receives shadows.
 * @param {number} size - Size of the plane.
 * @param {number} color - Color of the plane.
 * @returns {THREE.Mesh} Plane mesh.
 */
export function createShadowReceiverPlane(size = 50, color = 0xff0000) {
    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshStandardMaterial({ 
        side: THREE.DoubleSide, 
        color 
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.receiveShadow = true;
    plane.rotation.x = -0.5 * Math.PI; // Rotate to make it horizontal
    return plane;
}

/**
 * Creates a cube that casts shadows.
 * @param {number} size - Size of the cube.
 * @param {number} color - Color of the cube.
 * @returns {THREE.Mesh} Cube mesh.
 */
export function createShadowCasterCube(size = 5) {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshStandardMaterial({ });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = false;
    cube.position.y = size / 2; // Position it to sit on the plane
    return cube;
}
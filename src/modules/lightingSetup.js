import * as THREE from 'three';

/**
 * Adds a directional light with shadow support to the scene.
 * @param {THREE.Scene} scene 
 * @returns {THREE.DirectionalLight} Configured directional light.
 */
export function addDirectionalLight(scene) {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 20, 10);
    light.castShadow = true;

    // Configure shadow properties for better quality
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;

    // Adjust shadow camera bounds to fit the scene
    light.shadow.camera.left = -20;
    light.shadow.camera.right = 20;
    light.shadow.camera.top = 20;
    light.shadow.camera.bottom = -20;

    // Optional: Reduce shadow artifacts
    light.shadow.bias = -0.001;

    scene.add(light);

    // Add a helper to visualize the light's position and shadow camera
    const helper = new THREE.DirectionalLightHelper(light, 5);
    scene.add(helper);

    return light;
}
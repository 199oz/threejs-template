import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Initializes orbit controls for the given camera and renderer.
 * @param {THREE.PerspectiveCamera} camera 
 * @param {THREE.WebGLRenderer} renderer 
 * @returns {OrbitControls} Configured controls.
 */
export function initializeControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    return controls;
}
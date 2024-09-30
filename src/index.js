import * as THREE from 'three';
function init() {
    
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    
    camera.position.set(0, 0, 10);
    
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sizes.width, sizes.height);
    
    document.body.appendChild(renderer.domElement);
    
    function tick() {
        requestAnimationFrame(tick);
        renderer.render(scene, camera);
    }
    tick();
}
init();
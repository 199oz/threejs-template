// resizeHandler.js
/**
 * Adjusts camera and renderer settings on window resize.
 * @param {THREE.PerspectiveCamera} camera 
 * @param {THREE.WebGLRenderer} renderer 
 */
export function handleResize(camera, renderer) {
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    }, false
);

window.addEventListener('dblclick',() =>{
    if (!document.fullscreenElement) {
        renderer.domElement.requestFullscreen()
    }
    else{
        document.exitFullscreen()
    }
})

}


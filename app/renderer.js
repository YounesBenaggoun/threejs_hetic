
import * as THREE from "three";

export function createRenderer() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });


    let container = document.getElementById('ThreeJS');
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    return renderer;
}
import * as THREE from "three";

export function createScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);
    const loader = new THREE.TextureLoader();

    loader.load('sky.jpg', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
    });

    scene.fog = new THREE.Fog(0xe6f2ff, 150, 850);
    return scene;
}
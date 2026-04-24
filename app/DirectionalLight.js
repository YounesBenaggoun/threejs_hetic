
import * as THREE from "three";



export default class DirectionalLight {
    constructor(scene) {
        this.scene = scene;

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        this.directionalLight.position.set(50, 50, 50);

        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.camera.left = -50;
        this.directionalLight.shadow.camera.right = 50;
        this.directionalLight.shadow.camera.top = 50;
        this.directionalLight.shadow.camera.bottom = -50;
        this.directionalLight.shadow.camera.near = 0.5;
        this.directionalLight.shadow.camera.far = 200;

        this.directionalLight.shadow.mapSize.width = 2048;
        this.directionalLight.shadow.mapSize.height = 2048;

        this.directionalLight.lookAt(0, 0, 0);

        this.scene.add(this.directionalLight);
    }
}


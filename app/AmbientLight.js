import * as THREE from "three";

export default class AmbientLight {
    constructor(scene) {
        this.scene = scene;
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(this.ambientLight);
    }
}

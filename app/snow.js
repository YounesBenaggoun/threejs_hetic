
import * as THREE from "three";


export default class Snow {
    flakes;
    randoms;
    PARTICLE_NUMBER;
    constructor(scene) {
        this.scene = scene;
        this.addSnow();

    }
    addSnow() {
        this.PARTICLE_NUMBER = 10000;
        this.randoms = [];
        let coordinates = [];
        for (let i = 0; i < this.PARTICLE_NUMBER; i++) {
            let x = Math.random() * 500 - 250;
            let y = Math.random() * 100;
            let z = Math.random() * 500 - 250;

            this.randoms.push(Math.random());

            coordinates.push(x, y, z);
        }

        let geometry = new THREE.BufferGeometry();

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(coordinates, 3));

        let textureLoader = new THREE.TextureLoader();
        // let texture = textureLoader.load('https://i.ibb.co/PsYywF6g/snowflake.png');
        let texture = textureLoader.load('public/snowflake.png');

        let snowMaterial = new THREE.PointsMaterial({
            map: texture,
            size: 1.5,
            transparent: true,
            alphaTest: 0.5,
        });

        this.flakes = new THREE.Points(geometry, snowMaterial);

        this.scene.add(this.flakes);

    }
    animation(time) {
        let positions = this.flakes.geometry.attributes.position.array;

        for (let i = 0; i < this.PARTICLE_NUMBER; i++) {
            positions[i * 3] = positions[i * 3] + Math.sin(time + this.randoms[i] * Math.PI * 2) * 0.02;
            positions[i * 3 + 1] -= 0.05 + this.randoms[i] * 0.01;
            positions[i * 3 + 2] = positions[i * 3 + 2] + Math.cos(time + this.randoms[i] * Math.PI * 2) * 0.02;

            if (positions[i * 3 + 1] < -2) {
                positions[i * 3] = Math.random() * 500 - 250
                positions[i * 3 + 1] = 100
                positions[i * 3 + 2] = Math.random() * 500 - 250
            }
        }

        this.flakes.geometry.attributes.position.needsUpdate = true;
    }





}



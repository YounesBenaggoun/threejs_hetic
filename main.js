import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { createRenderer } from "./app/renderer.js";
import { createScene } from "./app/scene.js";
import { createCamera } from "./app/camera.js";

import Sol from './app/Sol.js';

import Snow from "./app/snow.js";
import DirectionalLight from "./app/DirectionalLight.js";
import AmbientLight from "./app/AmbientLight.js";
import Water from './app/water.js';

import Tree from './app/tree.js';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

import Stats from 'stats.js';


class App {
    clock;
    constructor() {

        this.scene = createScene();
        this.camera = createCamera();
        this.renderer = createRenderer();

        this.ambientLight = new AmbientLight(this.scene);
        this.directionalLight = new DirectionalLight(this.scene);


        this.snow = new Snow(this.scene);
        this.sol = new Sol(this.scene);
        this.water = new Water(this.scene, this.sol);
        this.tree = new Tree(this.scene, this.sol, this.water);




        new OrbitControls(this.camera, this.renderer.domElement);
        this.clock = new THREE.Clock();



        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));

        this.composer.addPass(new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.15,
            0.3,
            0.85
        ));


        this.stats = new Stats();
        this.stats.showPanel(0);
        document.body.appendChild(this.stats.dom);



        this.animate();
    }
    Resize(){
        
    }


    animate() {
        requestAnimationFrame(() => {
            this.animate();
        });
        this.stats.begin();
        this.snow.animation(this.clock.getElapsedTime());
        // this.renderer.render(this.scene, this.camera);
        this.composer.render();


        this.stats.end();
    }
}

window.onload = function () {
    new App();
}
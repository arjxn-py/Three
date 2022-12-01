import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const scene = new THREE.Scene();
scene.background = new THREE.Color(0xff0000);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const dplane = new THREE.Mesh( geometry, material );
scene.add( dplane );
dplane.position.set(3,3,3)

const orbit = new OrbitControls(camera, renderer.domElement);
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(1,2,5);
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
const box = new THREE.Mesh(boxGeometry,boxMaterial);

scene.add(box);

const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xbbaa66, side : THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5*Math.PI;
scene.add(plane);

const gridHelper = new THREE.GridHelper(10);
scene.add(gridHelper);

const animate = (time) => {
    box.rotation.x = time/1000;
    box.rotation.y = time/1000; 
    box.rotation.z = time/1000;

    dplane.rotation.x = time/1000;
    dplane.rotation.y = time/1000; 
    dplane.rotation.z = time/1000;

    renderer.render(scene , camera);
};

renderer.setAnimationLoop(animate);

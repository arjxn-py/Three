// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'



// const canvas = document.getElementById('myCanvas')
// const renderer = new THREE.WebGLRenderer({canvas: canvas});

// renderer.setSize(window.innerWidth, window.innerHeight);

// // document.body.appendChild(renderer.domElement);


// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xbbbfff);

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth/window.innerHeight,
//     0.1,
//     1000
// );

// const geometry = new THREE.BufferGeometry();
// const vertices = new Float32Array([

//     // (North Face)
//     .5, -.5, 0, // 0:  Center
//     1, -1, 0,   // 1:  NE
//     1, 0, 0,    // 2:  NW

//     // (East Face)
//     .5, -.5, 0, // 3:  Center
//     0, -1, 0,   // 4:  SE
//     1, -1, 0,   // 5:  NE

//     // (South Face)
//     .5, -.5, 0, // 6:  Center
//     0, 0, 0,    // 7:  SW
//     0, -1, 0,   // 8:  SE

//     // (West Face)
//     .5, -.5, 0, // 9:  Center
//     1, 0, 0,    // 10: NW
//     0, 0, 0,    // 11: SW


//     // (North Face)
//     2, -.5, 0, // 0:  Center
//     1, -1, 0,   // 1:  NE
//     1, 0, 0,    // 2:  NW

//     // (North Face)
//     0, -.5, 0, // 0:  Center
//     1, -1, 0,   // 1:  NE
//     1, 0, 0,    // 2:  NW

//     // (North Face)
//     0, -.5, 1, // 0:  Center
//     1, -1, 1,   // 1:  NE
//     1, 0, 1,    // 2:  NW




// ]);


// geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

// const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true  } );
// const mesh = new THREE.Mesh( geometry, material );

// mesh.rotation.x = - Math.PI / 2;
// scene.add( mesh );

// const orbit = new OrbitControls(camera, renderer.domElement);
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// camera.position.set(1,2,5);
// orbit.update();

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
// const box = new THREE.Mesh(boxGeometry,boxMaterial);
// // scene.add(box);

// const planeGeometry = new THREE.PlaneGeometry(10, 10);
// const planeMaterial = new THREE.MeshBasicMaterial({color: 0xbbaa66, side : THREE.DoubleSide});
// const plane = new THREE.Mesh(planeGeometry, planeMaterial)
// plane.rotation.x = -0.5*Math.PI;
// // scene.add(plane);

// const gridHelper = new THREE.GridHelper(10);
// scene.add(gridHelper);

// const animate = (time) => {
//     box.rotation.x = time/1000;
//     box.rotation.y = time/1000; 
//     box.rotation.z = time/1000;

//     // mesh.rotation.x = time/1000;
//     // mesh.rotation.y = time/1000; 
//     // mesh.rotation.z = time/1000;

//     renderer.render(scene , camera);
// };

// renderer.setAnimationLoop(animate);


var wwd = new WorldWind.WorldWindow("myCanvas");

wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());

wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

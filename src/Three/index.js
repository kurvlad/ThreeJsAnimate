import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import cube from './cube';
import { dirLight, ambientLight, dirLightHelper, pointLight, pointLightHelper } from './light';
import sphere from './sphere';
import onMouseMove from './mouseMove';
import gsap from 'gsap';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// создаем сцену
const scene = new THREE.Scene();

//добавляем свет
// scene.add(dirLight);
scene.add(pointLight);
scene.add(pointLightHelper);
scene.add(ambientLight);
// scene.add(dirLightHelper)

// создаем камеру
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 60;
camera.position.x = -3;
camera.position.y = 10;

//Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//Post Process

const renderPass = new RenderPass(scene, camera);

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerHeight, window.innerWidth),
    1, 5,
    0.4,
    0.85,
);

const composer = new EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(bloomPass);

//Добавляем на страницу
document.body.appendChild(renderer.domElement);

//Контроль над камерой
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.5;
controls.screenSpacePanning = false;
controls.minDistance = 2;
controls.maxDistance = 1000;

//добавляем объекты в сцену
// scene.add(cube);
// scene.add(sphere);

//Загрузка моделей
const loader = new GLTFLoader();

loader.load(
    'src/Three/models/city/scene.gltf',
    (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(1, 0, 1);
        scene.add(model)
    },
    (xhr) => {
        console.log(xhr.loaded / xhr.total * 100, '% loaded')
    },
    (error) => {
        console.error('ERROR:' + error)
    }
)

loader.load(
    'src/Three/models/bmw/scene.gltf',
    (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(-4, -0.2, -35);
        scene.add(model)
        gsap.to(model.position, { z: 35, duration: 4, yoyo: true, repeat: -1, ease: 'power1.inOut', delay: 0.2 })
    },
    (xhr) => {
        console.log(xhr.loaded / xhr.total * 100, '% loaded')
    },
    (error) => {
        console.error('ERROR:' + error)
    }
)

// loader.load('src/Three/models/zeml/scene.gltf',
//     (gltf) => {
//         const model = gltf.scene;
//         model.scale.set(1, 1, 1);
//         model.position.set(1, 0, 1);
//         scene.add(model);
//     }
// )

document.addEventListener('mousemove', (e) => { onMouseMove(e, camera, scene, cube) })

//rotate
const rotate = (figure) => {
    figure.rotation.x += .02;
    figure.rotation.y += .02;
}

//GSAP - библиотека для анимации
// gsap.to(cube.position, {
//     y: 3,
//     x: 0,
//     duration: 1,
//     ease: 'power1.on0out',
//     repeat: -1,
//     yoyo: true
// })


//Функция рендера анимации
const animate = () => {
    requestAnimationFrame(animate);
    // rotate(cube)
    // rotate(sphere)
    // renderer.setClearColor('lightblue')
    // renderer.render(scene, camera)
    composer.render()
}

animate()

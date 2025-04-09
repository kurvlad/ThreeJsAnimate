import * as THREE from 'three';

//Light Освещение
//ambient-Распространяется на все объекты
const ambientLight = new THREE.AmbientLight('white', 1);


//dirLight -точечный свет
const dirLight = new THREE.DirectionalLight('white', 5);
dirLight.position.set(5, 5, 5)

const dirLightHelper = new THREE.DirectionalLightHelper(dirLight)


// pointLight -точечный свет во все стороны
const pointLight = new THREE.PointLight('white', 10, 80);
pointLight.position.set(0.5, 2, 1);


const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);


//spotLight -точечный свет в одну сторону

const spotLight = new THREE.SpotLight('red', 12);
spotLight.position.set(0.5, 2, 1);

export { ambientLight, spotLight, pointLight, dirLight, dirLightHelper, pointLightHelper }
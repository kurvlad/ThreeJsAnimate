import * as THREE from 'three';

//Light Освещение
//ambient-Распространяется на все объекты
const ambientLight = new THREE.AmbientLight('white', 0.5);


//dirLight -точечный свет
const dirLight = new THREE.DirectionalLight('white', 0.4);
dirLight.position.set(5, 50, 5)

const dirLightHelper = new THREE.DirectionalLightHelper(dirLight)


// pointLight -точечный свет во все стороны
const pointLight = new THREE.PointLight('white', 50, 500, 2);
pointLight.position.set(-4, 20, -20);


const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);


//spotLight -точечный свет в одну сторону

const spotLight = new THREE.SpotLight('red', 12);
spotLight.position.set(0.5, 2, 1);

export { ambientLight, spotLight, pointLight, dirLight, dirLightHelper, pointLightHelper }
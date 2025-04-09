import * as THREE from 'three'

//texture
const texture = new THREE.TextureLoader().load('../../public/hq720.jpg');
const textureMaterial = new THREE.MeshStandardMaterial({ map: texture });

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    textureMaterial
)

plane.position.set(1, 2, 1);

plane.rotation.x = -.5;

export default plane
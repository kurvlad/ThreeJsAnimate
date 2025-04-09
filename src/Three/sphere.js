import * as THREE from 'three'
const sphereGeometry = new THREE.SphereGeometry(0.5, 60, 6);

const sphereMaterial = new THREE.MeshStandardMaterial({ color: 'gray' });

const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

sphere.position.set(2, 0, 0)

export default sphere
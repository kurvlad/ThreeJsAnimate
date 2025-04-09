import * as THREE from 'three'

const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 'red', wireframe: false });

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 0, 0)

const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
const edgesMaterial = new THREE.LineBasicMaterial({ color: 'black', linewidth: 3 });

const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);

cube.add(edges)

export default cube
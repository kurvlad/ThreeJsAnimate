import * as THREE from 'three'

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.7, 0.2, 16, 100),
    new THREE.MeshStandardMaterial({
        color: 'blue'
    })
)
torus.position.set(2, 2, 1);

export default torus
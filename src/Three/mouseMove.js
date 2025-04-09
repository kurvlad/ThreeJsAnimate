import gsap from 'gsap';
import * as THREE from 'three'

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const standartMaterial = new THREE.MeshStandardMaterial({
    color: 'red',
})

const higlightMaterial = new THREE.MeshBasicMaterial({
    color: 'green'
})

let isHovered = false;

function onMouseMove(e, camera, scene, object) {
    // берем точку нажатия
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
    //Линия нажатия от камеры в точку нажатия
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    //Проверяем есть ли объекты на этой линии
    if (intersects.length > 0 && !isHovered) {
        object.material = higlightMaterial
        isHovered = !isHovered
        gsap.to(object.scale, { x: 1.2, y: 1.2, z: 1.2 })
    } else if (intersects.length == 0 && isHovered) {
        object.material = standartMaterial
        isHovered = !isHovered
        gsap.to(object.scale, { x: 1, y: 1, z: 1 })
    }
}

export default onMouseMove
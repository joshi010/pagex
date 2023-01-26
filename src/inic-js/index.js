let btn = document.querySelector('#pot');
let spaceShip = document.querySelector('#lel');


const playing = () => {
    spaceShip.classList.add('up');
    spaceShip.src = './src/imagenes/nave.png';
    console.log('lel')
}

const stoping = () => {
    spaceShip.classList.remove('up');
    spaceShip.src = './src/imagenes/nave-not.png';
    console.log('lel')
}

btn.onmouseover = () => {
    playing()
}

btn.onmouseout = () => {
    stoping();
}

btn.onmousedown = () => {
    playing();
}
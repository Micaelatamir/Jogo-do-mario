const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {

    console.log('loop')

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  
  if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'mariogameover (2).png'
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
        // 1. Primeiro desenha o fundo
    ctx.drawImage(backgroundImg, 0, 0);

    // 2. Depois desenha o pipe (cano)
    ctx.drawImage(pipeImg, pipe.x, pipe.y);

    // 3. Por último desenha o personagem (sempre por cima)
    ctx.drawImage(playerImg, player.x, player.y);

    clearInterval(loop); 
  }
}, 10);

document.addEventListener('keydown', jump);

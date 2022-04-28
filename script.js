const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let posicao = 0;
let pulando = false;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!pulando){
            jump();
        }
        }
}

function jump() {
    pulando = true;
  
    let upInterval = setInterval(() => {
      if (posicao >= 150) {
        clearInterval(upInterval);
  
        let downInterval = setInterval(() => {
          if (posicao <= 0) {
            clearInterval(downInterval);
            pulando = false;
          } else {
            posicao -= 20;
            dino.style.bottom = posicao + 'px';
          }
        }, 20);
      } else {
        posicao += 20;
        dino.style.bottom = posicao + 'px';
      }
    }, 20);
  }


  function createCactus(){
      const cactus = document.createElement('div');
      let cactusPosition = 1000;
      let rdTime = Math.random() * 6000;

      cactus.classList.add('cactus');
      cactus.style.left = 1000 + 'px';
      background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && posicao < 60){
        clearInterval(leftInterval);
        document.body.innerHTML = '<h1 class="gg">fim de jogo</h1>';
        
        }else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
        }
    },20)

    setTimeout(createCactus,rdTime);
  }


createCactus();
document.addEventListener('keyup',handleKeyUp);

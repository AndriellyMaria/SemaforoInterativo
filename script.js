document.addEventListener('DOMContentLoaded', () => {
    const vermelho = document.getElementById('vermelho');
    const amarelo = document.getElementById('amarelo');
    const verde = document.getElementById('verde');
    const botao_vermelho = document.getElementById('botao_vermelho');
    const botao_amarelo = document.getElementById('botao_amarelo');
    const botao_verde = document.getElementById('botao_verde');
    const iniciar = document.getElementById('iniciar');
    const parar = document.getElementById('parar');
    const aumentar = document.getElementById('aumentarVelocidade');
    const diminuir = document.getElementById('diminuirVelocidader');
    
  
    let intervalo = null;
    let etapa = 0; // 0=vermelho, 1=amarelo, 2=verde
  
    function apagarTudo() {
      vermelho.classList.remove('acesa');
      amarelo.classList.remove('acesa');
      verde.classList.remove('acesa');
    }
  
    function acenderLuz() {
      apagarTudo();
      if (etapa === 0) vermelho.classList.add('acesa');
      if (etapa === 1) amarelo.classList.add('acesa');
      if (etapa === 2) verde.classList.add('acesa');
    }

    function acenderVermelho() {
        apagarTudo();
        vermelho.classList.add('acesa');   
    }

    function acenderAmarelo() {
        apagarTudo();
        amarelo.classList.add('acesa');
    }

    function acenderVerde() {
        apagarTudo();
        verde.classList.add('acesa');
    }
  
    function mudarLuz() {
      etapa = (etapa + 1) % 3; // alterna entre 0,1,2
      acenderLuz();
    }
  
    iniciar.addEventListener('click', () => {
      if (intervalo) return;
      acenderLuz();
      intervalo = setInterval(mudarLuz, 1000); // muda a cada 3 segundos
    });
  
    parar.addEventListener('click', () => {
      clearInterval(intervalo);
      intervalo = null;
      apagarTudo();
    });

    botao_vermelho.addEventListener('click', () =>{
        if (intervalo) return;
        acenderVermelho()
    });

    botao_amarelo.addEventListener('click', () =>{
        if (intervalo) return;
        acenderAmarelo()
    });

    botao_verde.addEventListener('click', () =>{
        if (intervalo) return;
        acenderVerde()
    });
  });
  
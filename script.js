document.addEventListener('DOMContentLoaded', () => {
    const vermelho = document.getElementById('vermelho');
    const amarelo = document.getElementById('amarelo');
    const verde = document.getElementById('verde');
    const botao_vermelho = document.getElementById('botao_vermelho');
    const botao_amarelo = document.getElementById('botao_amarelo');
    const botao_verde = document.getElementById('botao_verde');
    const iniciar = document.getElementById('iniciar');
    const parar = document.getElementById('parar');
    const maisRapido = document.getElementById('maisRapido');
    const maisDevagar = document.getElementById('maisDevagar');
    const velocidadeTexto = document.getElementById('velocidadeAtual');
    const estadoAtual = document.getElementById('estadoAtual');

  
    let tempo = 1000;  // tempo original (1s) 
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
      atualizarEstadoTexto();
    }

    // Funções para acender uma luz de cada vez quando a sequência estiver pausada

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
  
    // Função para trocar as luzes de tempo em tempo enquanto a sequência estiver ativa
    function mudarLuz() {
      etapa = (etapa + 1) % 3; // alterna entre 0,1,2
      acenderLuz();
    }
  
    function atualizarVelocidadeTexto() {
      velocidadeTexto.textContent = `Velocidade: ${(tempo / 1000).toFixed(1)}s`;
    }  // Atualiza a velocidade quando o botão aumentar/diminuir é clicado
    
    // Informa o estado atual do semáforo para o usuário
    function atualizarEstadoTexto() {
      if (intervalo) {
        if (etapa === 0) estadoAtual.textContent = "Estado atual: VERMELHO";
        if (etapa === 1) estadoAtual.textContent = "Estado atual: AMARELO";
        if (etapa === 2) estadoAtual.textContent = "Estado atual: VERDE";
      } else {
        estadoAtual.textContent = "Sequência pausada";
      }
    }
    
    // Chamando as constantes para rodar
    iniciar.addEventListener('click', () => {
      if (intervalo) return;
      acenderLuz();
      intervalo = setInterval(mudarLuz, tempo); // muda a conforme a velocidade escolhida
      atualizarEstadoTexto();
    });
  
    parar.addEventListener('click', () => {
      clearInterval(intervalo);
      intervalo = null;
      apagarTudo();
      atualizarEstadoTexto();
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

    maisRapido.addEventListener('click', () => {
      if (tempo > 300) tempo -= 200; // limite mínimo
      atualizarVelocidadeTexto();
  
      if (intervalo) {
        clearInterval(intervalo);
        intervalo = setInterval(mudarLuz, tempo);
      }
    });
  
    maisDevagar.addEventListener('click', () => {
      if (tempo < 5000) tempo += 200; // limite máximo
      atualizarVelocidadeTexto();
  
      if (intervalo) {
        clearInterval(intervalo);
        intervalo = setInterval(mudarLuz, tempo);
      }
    });
  
    atualizarVelocidadeTexto();
  });
  
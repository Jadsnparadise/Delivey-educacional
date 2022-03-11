//link do vídeo: https://youtu.be/_bEUqwEccG8
var tempo = [];
tempo[0]= 930;
tempo[1]= 480;
tempo[2]= 360;
tempo[3]= 300;
contS = tempo/30;
var largura = 200;
var altura = 50;
var xMenu = 175;
var yMenu1 = 160;
var yMenu2 = 225;
var yMenu3 = 280;
var xjogador = 180
var yjogador = 420;
var tela = 1;
var centroXCA = 480;
var centroYCA = 180;
var centroYCB = 480;
var centroXCB = 50;
var xjogador = 180;
var yjogador = 180;
var raioJogador = 30;
var raioCA = 45;
var backgroundSound;
let img;
let c;
function preload() {
  // preload() runs once
  img = loadImage('créditos/igor.png');
  img2= loadImage('créditos/Jonas.png');
  img3 = loadImage('água/barrildeagua.png');
  img4 = loadImage('personagem/personagemv2.png');
  img5 = loadImage('água/galaodeagua.png');
  img6 = loadImage('background/backgroundMenuv2.png');
  img7 = loadImage('background/background300.png');
  img8 = loadImage('Texto/textoInstruções.png');
  img9 = loadImage('background/backgroundMenu.png');
  img10 = loadImage('background/backgroundInGame.png');
  img11 = loadImage('personagem/personagemv3.png');
  img12 = loadImage('Texto/questão1.png');
  img13 = loadImage('seta.png');
  img14 = loadImage('personagem/personagemGameOver.png');
  img15 = loadImage('Texto/GameOver.png');
  img16 = loadImage('Texto/questão2.png');
  img17 = loadImage('Texto/questão3.png');
  img18 = loadImage('Texto/questão4.png');
 
  
}
function setup() {
  createCanvas(550, 550);
  frameRate(30); 
   backgroundSound = loadSound('Music/Jazzy.mp3',loaded);
  backgroundSound.setVolume(0.05);
 
}
function loaded(){
  backgroundSound.loop();
}


function draw() {
  textStyle(NORMAL);
  //tela de menu;
  if (tela == 1){  
  image(img9,0,0);  
    //menu com três opções
    //iniciar o jogo
    textAlign(CENTER);
    textSize(34);
    
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ){    
    stroke(200);
    fill(240);
    rect(xMenu, yMenu1, largura, altura,15);
      if (mouseIsPressed){
        tela = 2;
      }
    }
    
    fill(20);
    noStroke();
    text("Iniciar", 275, 200);
    
    //botão de informações
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ){ 
    stroke(200);
    fill(240);
    rect(xMenu, yMenu2, largura, altura,15);
      if(mouseIsPressed){
        tela = 3;
      }
    }
    fill(20);
    noStroke();
    text("Informações", 275, 260);
    
    //Botão de créditos
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ){ 
    stroke(200);
    fill(240);
    rect(xMenu, yMenu3, largura, altura,15);
      if(mouseIsPressed){
        tela = 4;
      }
    }
    
    fill(20);
    noStroke();
    text("Créditos", 275, 320);
  }
  //tela 4(créditos)
  if(tela == 4){
    image(img6, 0, 0);
    textAlign(CENTER);
    textSize(26);
  image(img6,0,0);
  fill(0,0,0);
  text("Créditos", 250, 40)
  text("Programador: Jonas Sena", 250, 250);
  text("Educador: Igor alberto", 250, 485);
  image(img, 175, 300);
  image(img2, 175,65);
  image(img3, 125,175)
  image(img3, 325,175);
  image(img4, 335,100);
  image(img5, 300,325);
  image(img5, 75,325);
    //botão de "voltar"
    if(mouseX > 250 && mouseX < 250 + largura  && mouseY > 495 && mouseY < 495 + altura ){      
    stroke(200);
      fill(240);
    textSize(38)  
      if(mouseIsPressed){
        tela = 1;
      }
    }  
    fill(20);
    text("voltar", 275, 530);
    
  }
  //tela 3(informações)
  if(tela == 3){
    textSize(34);
    image(img6, 0, 0);
    fill(20);
    text("Informações", 275, 30);    
    if(mouseX > 5 && mouseX < 5 + 500 && mouseY > 40 && mouseY < 40 + 425 ){ 
    stroke(200);
    fill(240);
    rect(5, 40, 500, 425,15);     
    }  
    image(img8,10,50);
    
   //botão de "voltar"
    if(mouseX > 250 && mouseX < 250 + largura  && mouseY > 480 && mouseY < 480 + altura ){      
    stroke(200);
      fill(240);
      textSize(38)
      if(mouseIsPressed){
        tela = 1;
      }
    }  
    fill(20);
    text("voltar", 275, 500) ;
  } 
  if(tela == 2){
    
    //primeira tela após clicar em iniciar
    
    //corpo da questão
    
    textSize(24)
    image(img10, 0, 0);
    stroke(200);
    fill(240)
    rect(5,145,450,150,15);
    image(img12, 10, 150);
    
    //PRIMEIRA RESPOSTA FASE 1
    
    if(mouseX > 10 && mouseX < 150  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        pontos += 10;
        tela = 5;
        tempo[0]= 930;
        xjogador = 180
        yjogador = 420;
      }
    } 
    fill(20)
    text('A)1 galão', 70, 350);
    
    //SEGUNDA RESPOSTA FASE 1
    
    if(mouseX > 200 && mouseX < 330  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        tempo[0]= 930;
        pontos -= 5;
        tela = 5;
        xjogador = 180
        yjogador = 420;
      }
    } else{ 
      textSize(24)
    fill(20)
    
    }  
    text('B)100 galões', 240, 350);
    
    //TERCEIRA RESPOSTA FASE 1
    
    if(mouseX > 360 && mouseX < 530  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        pontos -= 5;
        tela = 5;
        tempo[0]= 930;
        xjogador = 180
        yjogador = 420;
      }
    } else{
    textSize(24)
    }
    fill(20)
    text('C)1000 galões', 425, 350)  
  }  
  
  //tela da fase 1
    if(tela == 5){
      ellipse(xjogador, yjogador, 2*raioJogador,2*raioJogador);
      ellipse(centroXCA, centroYCA, 2*raioCA, 2*raioCA);
      image(img10, 0, 0);
      
  //SISTEMA DE COLISÃO
      
  //COLISÃO NA CIDADE SUPERIOR DIREITA
      
      if (dist(centroXCA, centroYCA, xjogador, yjogador)< raioCA+ raioJogador){
    pontos += 10;
    tempo[1]= 480;
    tela = 7;
  }
      //COLISÃO NA CIDADE INFERIOR DIREITA
      if (dist(centroXCA, centroYCB, xjogador, yjogador)< raioCA +raioJogador){
      pontos = 0;
    tempo[0]= 930;
    tela = 6;
      }
      
      //COLISÃO NA CIDADE INFERIOR ESQUERDA
      if (dist(centroXCB, centroYCB, xjogador, yjogador)< raioCA +raioJogador){
      pontos = 0;
    tempo[0]= 930;
    tela = 6;
      }
        //COLISÃO NA CIDADE SUPERIOR ESQUERDA
      if (dist(centroXCB, centroYCA, xjogador, yjogador)< raioCA +raioJogador){
      pontos = 0;
    tempo[0]= 930;
    tela = 6;
      }
      
  //SISTEMA DE TEMPO     
      
      tempo[0] -= 1;
  textSize(24);
  contS = parseInt( tempo[0]/ 30);
  
  if(tempo[0] < 0){
    contS = 0;
    tela = 6;
  }
  text('Tempo: '+contS, 70, 30);
      text('Pontos: '+pontos, 485,30);
      image(img13, 450,60, 80, 80);
      
      //MOVIMENTAÇÃO DO JOGADOR
      
    image(img11, xjogador-30, yjogador-27);
    if (keyIsDown(LEFT_ARROW)|| keyIsDown(65)) {
    xjogador -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)|| keyIsDown(68) ) {
    xjogador += 3;
  }

  if (keyIsDown(UP_ARROW)|| keyIsDown(87)) {
    yjogador -= 3;
  }

  if (keyIsDown(DOWN_ARROW)|| keyIsDown(83)) {
    yjogador += 3;
  }
  }
  
  //TELA DE GAMEOVER
  
  if(tela == 6){
    tempo[0]= 1;
    image(img6, 0, 0);
    image(img14, 180,250, 180,180);
    image(img15, -10, 20);
    
    //Botão de voltar
    
    if(mouseX > 240 && mouseX < 300  && mouseY > 495 && mouseY < 495 + altura ){      
    stroke(200);
      fill(20);
    textSize(38)  
      if(mouseIsPressed){
        tela = 1;
        pontos = 0;
      }
    }  else{
       fill(20);
      textSize(30)
    }
   
    text("Menu", 275, 530);
  }
  if( tela == 7){
    //SEGUNDA FASE
    
    //corpo da questão 2
    
    textSize(24)
    image(img10, 0, 0);
    stroke(200);
    fill(240)
    rect(5,145,450,150,15);
    image(img16, 10, 150);
    
    //PRIMEIRA RESPOSTA FASE 2
    
    if(mouseX > 10 && mouseX < 150  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        pontos -= 5;
        tela = 8;
        tempo[1]= 450;
        xjogador = 180
        yjogador = 420;
      }
    } 
    fill(20)
    text('A)40 galões', 70, 350);
    
    //SEGUNDA RESPOSTA FASE 2
    
    if(mouseX > 200 && mouseX < 330  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        tempo[1]= 450;
        pontos += 10;
        tela = 8;
        xjogador = 180
        yjogador = 420;
      }
    } else{ 
      textSize(24)
    fill(20)
    
    }  
    text('A)4 galões', 240, 350);
    
    //TERCEIRA RESPOSTA FASE 2
    
    if(mouseX > 360 && mouseX < 530  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        pontos -= 5;
        tela = 8;
        tempo[1]= 450;
        xjogador = 180
        yjogador = 420;
      }
    } else{
    textSize(24)
    }
    fill(20)
    text('A)20000 galões', 425, 350)  
  }  
  
  //tela da fase 2
    if(tela == 8){
      ellipse(xjogador, yjogador, 2*raioJogador,2*raioJogador);
      ellipse(centroXCA, centroYCA, 2*raioCA, 2*raioCA);
      image(img10, 0, 0);
      
  //SISTEMA DE COLISÃO
      
  //COLISÃO NA CIDADE SUPERIOR DIREITA
      
      if (dist(centroXCA, centroYCA, xjogador, yjogador)< raioCA+ raioJogador){
    pontos = 0;
    tempo[0]= 930;
    tela = 6;
  }
      //COLISÃO NA CIDADE INFERIOR DIREITA
      if (dist(centroXCA, centroYCB, xjogador, yjogador)< raioCA +raioJogador){
      pontos = 0;
    tempo[0]= 930;
    tela = 6;
      }
      
      //COLISÃO NA CIDADE INFERIOR ESQUERDA
      if (dist(centroXCB, centroYCB, xjogador, yjogador)< raioCA +raioJogador){
      pontos = 0;
    tempo[0]= 930;
    tela = 6;
      }
        //COLISÃO NA CIDADE SUPERIOR ESQUERDA
      if (dist(centroXCB, centroYCA, xjogador, yjogador)< raioCA +raioJogador){
      pontos +=10;
    tempo[2]= 360;
    tela = 9;
      }
      
  //SISTEMA DE TEMPO FASE 2    
      
      tempo[1] -= 1;
  textSize(24);
  contS = parseInt( tempo[1]/ 30);
  
  if(tempo[1] < 0){
    contS = 0;
    tela = 6;
  }
  text('Tempo: '+contS, 70, 30);
      text('Pontos: '+pontos, 485,30);
      
      //SETINHA INDICANDO A CIDADE CORRETA
      
      image(img13, 20,60, 80, 80);
      
      //MOVIMENTAÇÃO DO JOGADOR FASE 2      
  image(img11, xjogador-30, yjogador-27);
    if (keyIsDown(LEFT_ARROW)|| keyIsDown(65)) {
    xjogador -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)|| keyIsDown(68) ) {
    xjogador += 3;
  }

  if (keyIsDown(UP_ARROW)|| keyIsDown(87)) {
    yjogador -= 3;
  }

  if (keyIsDown(DOWN_ARROW)|| keyIsDown(83)) {
    yjogador += 3;
  }
  }
  
                    //TERCEIRA FASE
  
  if(tela == 9){
        
    //corpo da questão 3
    
    textSize(24)
    image(img10, 0, 0);
    stroke(200);
    fill(240)
    rect(5,145,450,150,15);
    image(img17, 10, 150);
    
    //PRIMEIRA RESPOSTA FASE 3
    
    if(mouseX > 10 && mouseX < 150  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        pontos += 10;
        tela = 10;
        tempo[2]= 360;
        xjogador = 180
        yjogador = 420;
      }
    } 
    fill(20)
    text('A)40 galões', 70, 350);
    
    //SEGUNDA RESPOSTA FASE 3
    
    if(mouseX > 200 && mouseX < 330  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        tempo[2]= 360;
        pontos -= 5;
        tela = 10;
        xjogador = 180
        yjogador = 420;
      }
    } else{ 
      textSize(24)
    fill(20)
    
    }  
    text('A)4 galões', 240, 350);
    
    //TERCEIRA RESPOSTA FASE 3
    
    if(mouseX > 360 && mouseX < 530  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        pontos -= 5;
        tela = 10;
        tempo[2]= 360;
        xjogador = 180
        yjogador = 420;
      }
    } else{
    textSize(24)
    }
    fill(20)
    text('A)400 galões', 425, 350)  
  }  
  
  //tela da fase 2
    if(tela == 10){
      ellipse(xjogador, yjogador, 2*raioJogador,2*raioJogador);
      ellipse(centroXCA, centroYCA, 2*raioCA, 2*raioCA);
      image(img10, 0, 0);
      
  //SISTEMA DE COLISÃO
      
  //COLISÃO NA CIDADE SUPERIOR DIREITA
      
      if (dist(centroXCA, centroYCA, xjogador, yjogador)< raioCA+ raioJogador){
    pontos = 0;
    tempo[0]= 930;
    tela = 6;
  }
      //COLISÃO NA CIDADE INFERIOR DIREITA
      if (dist(centroXCA, centroYCB, xjogador, yjogador)< raioCA +raioJogador){
      pontos = 0;
    tempo[0]= 930;
    tela = 6;
      }
      
      //COLISÃO NA CIDADE INFERIOR ESQUERDA
      if (dist(centroXCB, centroYCB, xjogador, yjogador)< raioCA +raioJogador){
      pontos +=10;
    tempo[3]= 300;
    tela = 11;
      }
        //COLISÃO NA CIDADE SUPERIOR ESQUERDA
      if (dist(centroXCB, centroYCA, xjogador, yjogador)< raioCA +raioJogador){
      pontos = 0;
    tempo[0]= 930;
    tela = 6;
      }
      
  //SISTEMA DE TEMPO FASE 3 
      
      tempo[2] -= 1;
  textSize(24);
  contS = parseInt( tempo[2]/ 30);
  
  if(tempo[2] < 0){
    contS = 0;
    tela = 6;
  }
  text('Tempo: '+contS, 70, 30);
      text('Pontos: '+pontos, 485,30);
      
      //SETINHA INDICANDO A CIDADE CORRETA
      
      image(img13, 10,350, 80, 80);
      
      //MOVIMENTAÇÃO DO JOGADOR FASE 3     
  image(img11, xjogador-30, yjogador-27);
    if (keyIsDown(LEFT_ARROW)|| keyIsDown(65)) {
    xjogador -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)|| keyIsDown(68) ) {
    xjogador += 3;
  }

  if (keyIsDown(UP_ARROW)|| keyIsDown(87)) {
    yjogador -= 3;
  }

  if (keyIsDown(DOWN_ARROW)|| keyIsDown(83)) {
    yjogador += 3;
  }
  }
  if(tela == 11){
    //corpo da questão 4
    
    textSize(24)
    image(img10, 0, 0);
    stroke(200);
    fill(240)
    rect(5,145,450,150,15);
    image(img18, 10, 150);
    
    //PRIMEIRA RESPOSTA FASE 4
    
    if(mouseX > 10 && mouseX < 150  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        pontos -= 5;
        tela = 12;
        tempo[3]= 300;
        xjogador = 180
        yjogador = 420;
      }
    } 
    fill(20)
    text('A)75 galões', 70, 350);
    
    //SEGUNDA RESPOSTA FASE 4
    
    if(mouseX > 200 && mouseX < 330  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        tempo[3]= 300;
        pontos -= 5;
        tela = 12;
        xjogador = 180
        yjogador = 420;
      }
    } else{ 
      textSize(24)
    fill(20)
    
    }  
    text('A)7500 galões', 240, 350);
    
    //TERCEIRA RESPOSTA FASE 4
    
    if(mouseX > 360 && mouseX < 530  && mouseY > 320 && mouseY < 320 + altura ){      
    stroke(200);
      fill(20);
      textSize(28)
      if(mouseIsPressed){
        pontos +=10;
        tela = 12;
        tempo[3]= 300;
        xjogador = 180
        yjogador = 420;
      }
    } else{
    textSize(24)
    }
    fill(20)
    text('A)750 galões', 425, 350)  
  }  
  
  //tela da fase 4
    if(tela == 12){
      ellipse(xjogador, yjogador, 2*raioJogador,2*raioJogador);
      ellipse(centroXCA, centroYCA, 2*raioCA, 2*raioCA);
      image(img10, 0, 0);
      
  //SISTEMA DE COLISÃO
      
  //COLISÃO NA CIDADE SUPERIOR DIREITA
      
      if (dist(centroXCA, centroYCA, xjogador, yjogador)< raioCA+ raioJogador){
    pontos = 0;
    tempo[0]= 930;
    tela = 6;
  }
      //COLISÃO NA CIDADE INFERIOR DIREITA
      if (dist(centroXCA, centroYCB, xjogador, yjogador)< raioCA +raioJogador){
      pontos += 10;
    tempo[0]= 930;
    tela = 13;
      }
      
      //COLISÃO NA CIDADE INFERIOR ESQUERDA
      if (dist(centroXCB, centroYCB, xjogador, yjogador)< raioCA +raioJogador){
      pontos = 0;
    tempo[0]= 930;
    tela = 6;
      }
        //COLISÃO NA CIDADE SUPERIOR ESQUERDA
      if (dist(centroXCB, centroYCA, xjogador, yjogador)< raioCA +raioJogador){
      pontos = 0;
    tempo[0]= 930;
    tela = 6;
      }
      
  //SISTEMA DE TEMPO FASE 4
      
      tempo[3] -= 1;
  textSize(24);
  contS = parseInt( tempo[3]/ 30);
  
  if(tempo[3] < 0){
    contS = 0;
    tela = 6;
  }
  text('Tempo: '+contS, 70, 30);
      text('Pontos: '+pontos, 485,30);
      
      //SETINHA INDICANDO A CIDADE CORRETA
      
      image(img13, 430,330, 80, 80);
      
      //MOVIMENTAÇÃO DO JOGADOR FASE 4     
  image(img11, xjogador-30, yjogador-27);
    if (keyIsDown(LEFT_ARROW)|| keyIsDown(65)) {
    xjogador -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)|| keyIsDown(68) ) {
    xjogador += 3;
  }

  if (keyIsDown(UP_ARROW)|| keyIsDown(87)) {
    yjogador -= 3;
  }

  if (keyIsDown(DOWN_ARROW)|| keyIsDown(83)) {
    yjogador += 3;
  }
  }
  
  //FIM DAS FASES
  
  if(tela == 13){
    
    //TELA DO FIM DE JOGO
    
    image(img9, 0, 0)
    textSize(28)
    fill(20)
    text('PARABÉNS POR CONCLUIR O JOGO!\n SUA PONTUAÇÃO FOI: '+pontos, 270, 300)
    if(mouseX > 240 && mouseX < 300  && mouseY > 495 && mouseY < 495 + altura ){      
    stroke(200);
      fill(20);
    textSize(38)  
      if(mouseIsPressed){
        tela = 1;
        pontos = 0;
      }
    }  else{
       fill(20);
      textSize(30)
    }
   
    text("Menu", 275, 530);
  }
}
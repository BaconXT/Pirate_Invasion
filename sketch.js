const Engine = Matter.Engine; //leis da fisica
const World = Matter.World;  //universo 
const Bodies = Matter.Bodies; //os corpos  do universo

var engine, world;  //motor da fisica e o universo

var ground; //variavel chao

var canvas; //area

var backGround; //tela de fundo

var tower; //torre

var Apenas_uma_torre; //a imagem da torre

var cannon; //canhao
var angle; //angulo  do canhao
var CannonBall;

function preload() { //funçao de carregamento de imagens e sons
  backGround = loadImage("./assets/background.gif")  //para que a imagem seja carregada (tela de fundo no caso)
  Apenas_uma_torre = loadImage("./assets/tower.png") //para que a imagem da torre seja carregada
} //chave

function setup() { //funçao de configuraçao
  cannon = new Cannon(180, 110, 130, 100, angle);
  canvas = createCanvas(windowWidth,windowHeigth); //area criada
  engine = Engine.create(); //criando o motor da fisica
  world = engine.world; //adicionar o motor da fisica ao mundo
  var options = { //variavel de opçoes
    isStatic: true //para que ele fique totalmente parado
  
  } //chave
  angleMode(DEGREES);
  angle = 15;
  ground = Bodies.rectangle(0, height -1, width*2, 1, options);//para que o chao fique o maximo ao fundo da imagen
  World.add(world, ground); //para que o chao seja adicionado ao mundo
  tower = Bodies.rectangle(160, 350, 160, 310, options); //para que a torre tenha um corpo
  World.add(world, tower);  //para que a torre seja adcionada ao mundo
  CannonBall = new CannonBall(cannon.x,cannon.y); //para que a  bola seja puxada de outra classe de outro arquivo de codigo
} //chave

function draw() { //funçao de desenhar
  
  image(backGround,0,0,windowWidth,windowHeigth) //o tamanho do fundo de tela
  
  rect(ground.position.x,ground.position.y, width*2,1); //para desenhar o chao de outro codigo sem puxado
  
  push(); //aplicar as configuraçoes:
  imageMode(CENTER); //modo de imagem no centro
  image(Apenas_uma_torre,tower.position.x,tower.position.y, 160, 310); //as posiçoes da torre e tambem a imagem
  pop(); //essas configuraçoes terminam aqui
  cannon.display(); //mostrar o canhao
  
  Engine.update(engine); //motor da fisica quando executado
  CannonBall.display(); //mostrar a bala do canhao
} //chave

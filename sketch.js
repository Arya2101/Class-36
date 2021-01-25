var db;
var gameState = 0;
var playerCount = 0;
var f;
var p;
var g;

function setup(){
    db = firebase.database(); 
    createCanvas(1200,500);
    g = new game();
    g.getState();
    g.start();
    
   }

function draw(){
    background("white");
  }



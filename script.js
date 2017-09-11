//indica ao navegador para trabalhar estritamente com dados ja definidos
"use strict";
//recupera a referência ao objeto do canvas HTML
var canvas = document.getElementById("tela");
//recupera o contexto de desenho bidimencional do canvas
var ctx = canvas.getContext("2d"); //Nao utilizado em webGL
var x = 200, y= 100, larg = 20, alt = 20, escala = 1;
var ang = 0;



function circulo(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle="rgb(255,128,0)";
    ctx.arc(x,y,larg,0,2*Math.PI);
    ctx.fill();
    requestAnimationFrame(circulo);
}

function carro(){    
ctx.clearRect(-canvas.width, -canvas.height,2*canvas.width, 2*canvas.height);
//ctx.clearRect(0,0,canvas.width, canvas.height);
    //chassi
ctx.save();
ctx.translate(x,y);
ctx.rotate(ang);

ctx.beginPath();
ctx.fillStyle="rgb(255,255,255)";

ctx.scale(escala,escala);
ctx.moveTo(15,15);
ctx.lineTo(15,-15);
ctx.lineTo(5,-15);
ctx.lineTo(5,-60);//bico    
ctx.lineTo(-5,-60);    
ctx.lineTo(-5,-15); 
ctx.lineTo(-15,-15);
ctx.lineTo(-15,15); 
ctx.lineTo(15,15);  
ctx.fill();
ctx.closePath();
   //rodas 
ctx.beginPath();
ctx.fillStyle="rgb(110,110,110)";
ctx.moveTo(15,15);
ctx.fillRect(-13,-45,-8,-12);//de
ctx.fillRect(-13, 18,-10,-12);//te
ctx.fillRect(19,-45,-8,-12);//dd
ctx.fillRect(23, 18,-10,-12);//td
ctx.closePath();
//malboro t
ctx.fillStyle="rgb(255,0,0)";
ctx.moveTo(15,15);
ctx.fillRect(-15,15,30,-12);
ctx.closePath();

//malboro f
ctx.fillStyle="rgb(255,0,0)";
ctx.moveTo(15,15);
ctx.fillRect(5,-30,-10,-12);
ctx.closePath();

//asa
ctx.fillStyle="rgb(255,255,255)";
ctx.moveTo(0,0);
ctx.fillRect(-15,-60,30,-7);
ctx.closePath();
//capacete


ctx.fillStyle="rgb(255,128,0)";
ctx.moveTo(0, 0);
//x, y, larg
ctx.arc(0, -20, 6, 0, Math.PI * 2, true);  //
ctx.fill();

// fantasma 
/*
ctx.beginPath();
ctx.fillStyle="rgb(255,128,0)";
//ctx.moveTo(0, 0);
ctx.moveTo(83,116);
ctx.lineTo(83,102);
ctx.bezierCurveTo(83,94,89,88,97,88);
ctx.bezierCurveTo(105,88,111,94,111,102);
ctx.lineTo(111,116);
ctx.lineTo(106.333,111.333);
ctx.lineTo(101.666,116);
ctx.lineTo(97,111.333);
ctx.lineTo(92.333,116);
ctx.lineTo(87.666,111.333);
ctx.lineTo(83,116);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(91,96);
ctx.bezierCurveTo(88,96,87,99,87,101);
ctx.bezierCurveTo(87,103,88,106,91,106);
ctx.bezierCurveTo(94,106,95,103,95,101);
ctx.bezierCurveTo(95,99,94,96,91,96);
ctx.moveTo(103,96);
ctx.bezierCurveTo(100,96,99,99,99,101);
ctx.bezierCurveTo(99,103,100,106,103,106);
ctx.bezierCurveTo(106,106,107,103,107,101);
ctx.bezierCurveTo(107,99,106,96,103,96);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(101,102,2,0,Math.PI*2,true);
ctx.fill();

ctx.beginPath();
ctx.arc(89,102,2,0,Math.PI*2,true);
ctx.fill()
*/




ctx.restore();    
    
requestAnimationFrame(carro);    
}




function mover(v1,v2){
    x += (Math.cos(ang)*v1)+ 
    (-Math.sin (ang)*v2);
    y += (Math.sin(ang)*v1)+
    (Math.cos(ang)*v2);
    }
requestAnimationFrame(carro);

//ctx.translate(320,240);

/*

document.onkeydown = function (evt){
   console.log(evt.keyCode)

   if(evt.keyCode ==38){
       mover(0,-5);
    }
   if(evt.keyCode ==40){
       mover(0,5);
    }
   if(evt.keyCode ==103){
       mover(-5,0);
    }
   if(evt.keyCode ==105){
       mover(5,0);
    }
   if(evt.keyCode ==39){
       ang = ang + (0.02 * Math.PI);
    }
   if(evt.keyCode ==37){
       ang = ang - (0.02 * Math.PI);
   }*/

    var pressedU = false;
    var pressedD = false;
    var pressedL = false;
    var pressedR = false;

    document.onkeyup = function (e){
        console.log(e.keyCode)
        if (e.which ==38)
            pressedU = false;
        if (e.which ==40)
            pressedD = false;
        if (e.which ==37)
            pressedL = false;
        if (e.which ==39)
            pressedR = false;
    }
document.onkeydown = function (e){
    console.log(e.keyCode)
    if (e.which ==38)
        pressedU = true;
    if (e.which ==40)
        pressedD = true;
    if (e.which ==37)
        pressedL = true;
    if (e.which ==39)
        pressedR = true;
    if(pressedR){
        ang = ang + (0.02 * Math.PI);
    }
    if(pressedL){
        ang = ang - (0.02 * Math.PI);
    }
    if (pressedD){
        mover(0,5);
    }
    if (pressedU){
        mover(0,-5);
    }
    if (e.which ==33){
      escala = (escala + 0.1);
    }
    if (e.which ==34){
        escala = (escala - 0.1);
      }
}

    // if(evt.keyCode == 38){ctx.translate(0,-5);}
    // if (evt.keyCode == 40){ctx.translate(0,5);}
    // if(evt.keyCode == 37){ctx.translate(-5,0);}
    // if (evt.keyCode == 39){ctx.translate(5,0);}
    // if (evt.keyCode == 81){ctx.rotate(0.1 * Math.PI);}
    // if (evt.keyCode == 69){ctx.rotate(-0.1 * Math.PI);}


/*document.onkeydown = function (evt){
   console.log(evt.keyCode)
    
    if (evt.keyCode == 87){y = y-5;}
    if (evt.keyCode == 83){y = y+8;}
    if (evt.keyCode == 65){x = x-5;}
    if (evt.keyCode == 68){x = x+5;}
    if (evt.keyCode == 81){ang = ang + (0.1 * Math.PI);}
    if (evt.keyCode == 69){ang = ang - (0.1 * Math.PI);}
    if (evt.keyCode == 104){y2 = y2-5;}
    if (evt.keyCode == 101){y2 = y2+8;}
    if (evt.keyCode == 100){x2 = x2-5;}
    if (evt.keyCode == 102){x2 = x2+5;}
    if (evt.keyCode == 103){ang2 = ang2 + (0.1 * Math.PI);}
    if (evt.keyCode == 105){ang2 = ang2 - (0.1 * Math.PI);}
}*/



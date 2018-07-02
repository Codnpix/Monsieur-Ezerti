  var song = document.getElementById("soundtrack");
  song.play();

  function play1() {
  var x = document.createElement("IMG");
  var roll = roll();
  function roll(){
    return Math.floor(Math.random()*6)+1;
  }

  if (roll === 1) {
    x.setAttribute("src","dice1.bmp"); document.getElementById("gifcoeur").style = "width:100px;height:100px;";
    document.getElementById("amourtitle").style.fontSize = "200%";
    document.getElementById("amourserv").style.fontSize = "100%";
  }
  else if (roll === 2) {
    x.setAttribute("src","dice2.bmp"); document.getElementById("gifpharma").style = "width:100px;height:100px;";
    document.getElementById("santetitle").style.fontSize = "200%";
    document.getElementById("santeserv").style.fontSize = "100%";
  }
  else if (roll === 3) {
    x.setAttribute("src","dice3.bmp");
    document.getElementById("giftechno").style = "width:100px;height:100px;";
    document.getElementById("technotitle").style.fontSize = "200%";
    document.getElementById("technoserv").style.fontSize = "100%";
  }
  else if (roll === 4) {
    x.setAttribute("src","dice4.bmp");
    document.getElementById("gifsex").style = "width:100px;height:100px;";
    document.getElementById("sextitle").style.fontSize = "200%";
    document.getElementById("sexserv").style.fontSize = "100%";
  }
  else if (roll === 5) {
    x.setAttribute("src","dice5.bmp");
    document.getElementById("gifwork").style = "width:100px;height:100px;";
    document.getElementById("worktitle").style.fontSize = "200%";
    document.getElementById("workserv").style.fontSize = "100%";
  }
  else if (roll === 6) {
    x.setAttribute("src","dice6.bmp");
    document.getElementById("gifmoney").style = "width:100px;height:100px;";
    document.getElementById("moneytitle").style.fontSize = "200%";
    document.getElementById("moneyserv").style.fontSize = "100%";
  } 

  document.getElementById('score').appendChild(x);
}

function disable() { document.getElementById('btn').disabled=true;
                   }


function play2() {
  var y = document.createElement("IMG");
  var roll2 = roll();
  function roll(){
    return Math.floor(Math.random()*6)+1;
  }

  if (roll2 === 1) {
    y.setAttribute("src","dice1.bmp"); 
  }
  else if (roll2 === 2) {
    y.setAttribute("src","dice2.bmp");
  }
  else if (roll2 === 3) {
    y.setAttribute("src","dice3.bmp");
  }
  else if (roll2 === 4) {
    y.setAttribute("src","dice4.bmp");
  }
  else if (roll2 === 5) {
    y.setAttribute("src","dice5.bmp");
  }
  else if (roll2 === 6) {
    y.setAttribute("src","dice6.bmp");
  }

  document.getElementById('score2').appendChild(y);
}

function disable2() { document.getElementById('btn2').disabled=true;
                    }

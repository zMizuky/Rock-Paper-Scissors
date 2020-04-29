var pPoints = 0;
var botPoints = 0;
var empate = 0;

var paper = 0;
var rock = 0;
var scissor = 0;

var bpaper = 0;
var brock = 0;
var bscissor = 0;

var txt = document.getElementById("txt");
var pedra = document.getElementById("pedra");
var papel = document.getElementById("papel");
var tesoura = document.getElementById("escolhas");




var botImg = document.getElementById("bot");

var p = document.createElement("p");

var vp = document.createElement("p");
function writeS(){
    p.innerHTML = "Seus pontos: " + pPoints + "<br>" + "Pontos do bot: "+ botPoints + "<br>" + "Empates: " + empate;
    p.id = "escol"
    document.body.appendChild(p);
}

function writeV(resultado){
    vp.innerHTML = "Resultado: " + resultado;
    vp.id = "escol"
    document.body.appendChild(vp);
}
writeS();
writeV();
function bot(){
    var botChoose = (Math.floor(Math.random() * 3));
    if (botChoose === 0){
        bpaper = 1; 
        console.log("Bot colocou: papel");
    }
    if (botChoose === 1){
        brock = 1;
        console.log("Bot colocou: pedra");
    }
    if (botChoose === 2){
        bscissor = 1;
        console.log("Bot colocou: tesoura");
    }
}

function rockClick(){
    rock = 1;
    bot()
    console.log("Player botou: pedra")
    chooseWinner();
    paper = 0;
    rock = 0;
    scissor = 0;

    bpaper = 0;
    brock = 0;
    bscissor = 0;
    
    txt.style.visibility = "visible";
    papel.style.visibility = "visible";
    tesoura.style.visibility = "visible";
    pedra.style.visibility = "visible";
}

function paperClick(){
    paper = 1;
    bot()
    console.log("Player botou: papel")
    chooseWinner();
    paper = 0;
    rock = 0;
    scissor = 0;

    bpaper = 0;
    brock = 0;
    bscissor = 0;
    
    txt.style.visibility = "visible";
    papel.style.visibility = "visible";
    tesoura.style.visibility = "visible";
    pedra.style.visibility = "visible";
}

function scissorClick(){
    scissor = 1;
    bot();
    console.log("Player botou: tesoura")
    chooseWinner();
    paper = 0;
    rock = 0;
    scissor = 0;

    bpaper = 0;
    brock = 0;
    bscissor = 0;
    
    txt.style.visibility = "visible";
    papel.style.visibility = "visible";
    tesoura.style.visibility = "visible";
    pedra.style.visibility = "visible";
}

function chooseWinner(){
    ///Player ganha
    if (scissor === 1 && bpaper === 1){
        pPoints += 1;
        console.log("Resultado: Player ganhou")
        botImg.src = "../img/o papel fofinho.png";
        writeS();
        writeV("Player ganhou")
    }
    if (paper === 1 && brock === 1){
        pPoints += 1;
        console.log("Resultado: Player ganhou")
        botImg.src = "../img/a pedra fofinha.png";
        writeS();
        writeV("Player ganhou")
    }
    if (rock === 1 && bscissor === 1){
        pPoints += 1;
        console.log("Resultado: Player ganhou")
        botImg.src = "../img/a tesoura fofinha.png";
        writeS();
        writeV("Player ganhou")
    }

    ///Bot ganha
    if (bscissor === 1 && paper === 1){
        botPoints += 1;
        console.log("Resultado: bot ganhou")
        botImg.src = "../img/a tesoura fofinha.png";
        writeS();
        writeV("bot ganhou")
    }

    if (brock === 1 && scissor === 1){
        botPoints += 1;
        console.log("Resultado: bot ganhou")
        botImg.src = "../img/a pedra fofinha.png";
        writeS();
        writeV("bot ganhou")
    }
    if (bpaper === 1 && rock === 1){
        botPoints += 1;
        console.log("Resultado: bot ganhou")
        botImg.src = "../img/o papel fofinho.png";
        writeS();
        writeV("bot ganhou")
    }
    ///Empate
    if (bpaper === 1 && paper === 1){
        empate += 1;
        console.log("Resultado: empate")
        botImg.src = "../img/o papel fofinho.png";
        writeS();
        writeV("empate")
    }
    if (brock === 1 && rock === 1){
        empate += 1;
        console.log("Resultado: empate")
        botImg.src = "../img/a pedra fofinha.png";
        writeS();
        writeV("empate")
    }
    if (bscissor === 1 && scissor === 1){
        empate += 1;
        console.log("Resultado: empate")
        botImg.src = "../img/a tesoura fofinha.png";
        writeS();
        writeV("empate")
    }
}
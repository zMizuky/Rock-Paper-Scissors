var pPoints = 0;
var botPoints = 0;
var empate = 0;

var paper = 0;
var rock = 0;
var scissor = 0;

var bpaper = 0;
var brock = 0;
var bscissor = 0;

var botImg = document.getElementById("bot");
var p = document.createElement("p");
p.id = "escol"
var vp = document.createElement("p");
vp.id = "result"

function reset(){
    paper = 0;
    rock = 0;
    scissor = 0;

    bpaper = 0;
    brock = 0;
    bscissor = 0;
}

function writeS(){
    p.innerHTML = "Seus pontos: " + pPoints + "<br>" + "Pontos do bot: "+ botPoints + "<br>" + "Empates: " + empate;
    document.body.appendChild(p);
}

function writeV(resultado){
    vp.innerHTML = "Resultado: " + resultado;
    document.body.appendChild(vp);
}
writeS();
writeV("escolha uma opção!");
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
    reset();
}

function paperClick(){
    paper = 1;
    bot()
    console.log("Player botou: papel")
    chooseWinner();
    reset();
}

function scissorClick(){
    scissor = 1;
    bot();
    console.log("Player botou: tesoura")
    chooseWinner();
    reset();
}

function chooseWinner(){
    ///Player ganha
    if (scissor === 1 && bpaper === 1){
        pPoints += 1;
        console.log("Resultado: Player ganhou")
        botImg.src = "https://raw.githubusercontent.com/zMizuky/pedra-papel-tesoura/master/img/o%20papel%20fofinho.png";
        writeS();
        writeV("Player ganhou")
    }
    if (paper === 1 && brock === 1){
        pPoints += 1;
        console.log("Resultado: Player ganhou")
        botImg.src = "https://raw.githubusercontent.com/zMizuky/pedra-papel-tesoura/master/img/a%20pedra%20fofinha.png";
        writeS();
        writeV("Player ganhou")
    }
    if (rock === 1 && bscissor === 1){
        pPoints += 1;
        console.log("Resultado: Player ganhou")
        botImg.src = "https://raw.githubusercontent.com/zMizuky/pedra-papel-tesoura/master/img/a%20tesoura%20fofinha.png";
        writeS();
        writeV("Player ganhou")
    }

    ///Bot ganha
    if (bscissor === 1 && paper === 1){
        botPoints += 1;
        console.log("Resultado: bot ganhou")
        botImg.src = "https://raw.githubusercontent.com/zMizuky/pedra-papel-tesoura/master/img/a%20tesoura%20fofinha.png";
        writeS();
        writeV("bot ganhou")
    }

    if (brock === 1 && scissor === 1){
        botPoints += 1;
        console.log("Resultado: bot ganhou")
        botImg.src = "https://raw.githubusercontent.com/zMizuky/pedra-papel-tesoura/master/img/a%20pedra%20fofinha.png";
        writeS();
        writeV("bot ganhou")
    }
    if (bpaper === 1 && rock === 1){
        botPoints += 1;
        console.log("Resultado: bot ganhou")
        botImg.src = "https://raw.githubusercontent.com/zMizuky/pedra-papel-tesoura/master/img/o%20papel%20fofinho.png";
        writeS();
        writeV("bot ganhou")
    }
    ///Empate
    if (bpaper === 1 && paper === 1){
        empate += 1;
        console.log("Resultado: empate")
        botImg.src = "https://raw.githubusercontent.com/zMizuky/pedra-papel-tesoura/master/img/o%20papel%20fofinho.png";
        writeS();
        writeV("empate")
    }
    if (brock === 1 && rock === 1){
        empate += 1;
        console.log("Resultado: empate")
        botImg.src = "https://raw.githubusercontent.com/zMizuky/pedra-papel-tesoura/master/img/a%20pedra%20fofinha.png";
        writeS();
        writeV("empate")
    }
    if (bscissor === 1 && scissor === 1){
        empate += 1;
        console.log("Resultado: empate")
        botImg.src = "https://raw.githubusercontent.com/zMizuky/pedra-papel-tesoura/master/img/a%20tesoura%20fofinha.png";
        writeS();
        writeV("empate")
    }
}
var corSelecionada = 'black';
var tela = document.getElementById('tela');
var ctx = tela.getContext('2d');
var podeDesenhar = false;
var mouseX = 0;
var mouseY = 0;

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

tela.addEventListener('mousedown', clicado);
tela.addEventListener('mousemove', mover);
tela.addEventListener('mouseup', desclicado);
document.querySelector('.clear').addEventListener('click', limparTela);

function colorClickEvent(e){
    var cor = e.target.getAttribute('data-color');
    corSelecionada = cor;
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function clicado(e){
    podeDesenhar = true;
    mouseX = e.pageX - tela.offsetLeft;
    mouseY = e.pageY - tela.offsetTop;
}

function desclicado(){
    podeDesenhar = false;
}

function mover(e){
    if(podeDesenhar) {
        desenhar(e.pageX, e.pageY);
    }
}

function desenhar(x, y){
    var pontoX = x - tela.offsetLeft;
    var pontoY = y - tela.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pontoX, pontoY);
    ctx.closePath();
    ctx.strokeStyle = corSelecionada;
    ctx.stroke();

    mouseX = pontoX;
    mouseY = pontoY;
}

function limparTela(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
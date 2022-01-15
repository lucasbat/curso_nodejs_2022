//console.log("Bem-vindos ao curso");
/*
var pessoa = {nome: "Hugo Vasconselos", sobrenome: "Freitas", idade: "27"};
console.log(pessoa);
*/
/*
function somar(a,b){
    return a+b;
}
console.log(somar(10,43));
*/
/*
var cursos = function(){
    console.log('Nosso site tem mais cursos');
}
cursos();
setTimeout(cursos, 5000);
*/
/*
function organizar(numero){
    console.log("Ordem do cliente:", numero);
    entrega(function(){
        console.log("Ordem de entrega:", numero);
    });
}

function entrega(callback){
    setTimeout(callback,5000);
}

organizar(1)
organizar(2)
organizar(3)
organizar(4)
organizar(5)
organizar(6)
*/
/*
var Hugo = {
    comidafav: "Peixe",
    esportefav: "Futebol",
    filmefav: "diversos"
}

var nome = Hugo;
nome.comidafav = "Feijoada";
nome.esportefav = "Kart";
console.log(Hugo.comidafav);
console.log(Hugo.esportefav);*/

//COMPARAÇÃO DE VALORES
/*
var Hugo = {
    nome: function(){
        console.log("Esse é meu nome");
        console.log(this === Hugo);
    }
}
Hugo.nome();
*/
/*
function semvalor(){
    console.log("Não tem valor");
    console.log(this === global);
}
semvalor(); */

//INCREMENTO DE VALORES
/*
function usuario() {
    this.nome = "";
    this.vida = 100;
    this.darvida = function darvida(jogadores) {
        jogadores.vida += 1;
    }
}

var Hugo = new usuario();
var Fabio = new usuario();

Hugo.nome = "Hugo";
Fabio.nome = "Fabio";

Hugo.darvida(Fabio);

console.log(`Hugo: ${Hugo.vida}`);
console.log(`Fabio: ${Fabio.vida}`);

//ADICIONAR FUNÇÃO A OBJETOS
usuario.prototype.acertar = function acertar(jogadores) {
    jogadores.vida -= 2;
    console.log(jogadores.nome + " perdeu vida para " + this.nome);
}

Fabio.acertar(Hugo);

console.log(`Hugo: ${Hugo.vida}`);
console.log(`Fabio: ${Fabio.vida}`);

Hugo.acertar(Fabio);

console.log(`Hugo: ${Hugo.vida}`);
console.log(`Fabio: ${Fabio.vida}`);

//ADICIONANDO PROPRIEDADES A OBJETOS
usuario.prototype.forca = 80;
console.log(`Força do Hugo: ${Hugo.forca}`);
console.log(`Força do Fabio: ${Fabio.forca}`);
*/

//EXPORTANDO FUNÇÕES
/*
var jogos = require('./jogos');
jogos.modulojogo();
*/

//AULA 17 - CHAMANDO VARIÁVEIS E FUNÇÕES EXTERNAS
/*
var jogos = require('./jogos');
jogos.fifa();
jogos.cod();
console.log(jogos.jogofavorito)
*/

//AULA 18 - CHAMANDO VARIÁVEIS EXTERNAS
/*
require('./hugo');
require('./fabio');
*/

//AULA 19 - CRIANDO ARQUIVOS PELO CÓDIGO
/*
var fs = require("fs");
fs.writeFileSync("nomes.txt", "hugo, paula, fabio");
console.log(fs.readFileSync("nomes.txt").toString());
*/

//AULA 20 - EXECUTANDO O CÓDIGO COM SetInterval
/*
console.log(__dirname);  //mostra caminho do diretório
console.log(__filename); //mostra caminho do diretório e nome do arquivo

setInterval(function(){
    console.log("Hugo Vasconcelos");
}, 3000);
*/

//AULA 21 - CONECTANDO COM O SERVIDOR  
//AULA 22 - Abrindo projeto com servidor criado
//AULA 23 - CHAMANDO PÁGINAS NO SERVIDOR LOCAL
const { fstat } = require('fs');
var http = require('http');

function mandar404(resposta){
    resposta.writeHead(404, {"context-type": "text/plain"});
    resposta.write("Falha ao tentar acessar o servidor!");
    resposta.end();
}

function onRequest(request, resposta){
    if(request.method == 'GET' && request.url == '/') { 
        console.log(`Usuário tem uma solicitação  + ${request.url}`);
        resposta.writeHead(200, {"context-type": "text/plain"});
        //resposta.write("Este texto será mostrado ao acessar o servidor");
        fstat.createReadStream("./index.html").pipe(resposta);
    } else {
        mandar404(resposta);
    }   
}

http.createServer(onRequest).listen(8888);
console.log("Servidor está ativo...");






/*
var fs = require('fs');
var http = require('http');

function mandar404(resposta){
    resposta.writeHead(404, {"context-type": "text/plain"});
    resposta.write("Falha ao tentar acessar o servidor!");
    resposta.end();
}

function onRequest(request, resposta){
    if(request.method == 'GET' && request.url == '/') { 
        //console.log(`Usuário tem uma solicitação  + ${request.url}`);
        resposta.writeHead(200, {"context-type": "text/plain"});
        //resposta.write("Este texto será mostrado ao acessar o servidor");
        fs.createReadStream("./index.html").pipe(resposta);
    } else {
        mandar404(resposta);
    }   
}

http.createServer(onRequest).listen(8888);
console.log("Servidor está ativo...");
*/
//AULA 24 - USANDO SERVIDOR NATIVO
//AULA 25 - TESTANDO SERVIDOR NATIVO
// INSTALAR:
// npm install connect
/*
var connect = require('connect');
var http = require('http');
var app = connect();

function primeiro(request, resposta, next) {
    console.log("Primeiro");
    next();
}

function segundo(request, resposta, next) {
    console.log("Segundo");
    next();
}

app.use(primeiro);
app.use(segundo);

http.createServer(app).listen(8888);

console.log("O servidor está ativo.");
*/

//AULA 26 - CHAMANDO PÁGINAS NO SERVIDOR NATIVO
var connect = require('connect');
var http = require('http');
var app = connect();

function login(request, resposta){
   console.log("O usuário pediu o login.") 
}

function contato(request, resposta){
   console.log("O usuário pediu o contato.") 
}

app.use('/login',login);
app.use('/contato',contato);

http.createServer(app).listen(8888);

console.log("O servidor está ativo.");


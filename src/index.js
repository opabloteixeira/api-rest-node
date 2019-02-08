const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

//express é um micro framework pra node
const app = express();

//extrai o server http do app que foi criado com express
const server = require('http').Server(app);
//habilita o que o server ouça o protocolo WS que é o protocolo web socket(faz reconhecer WS e HTTP)
const io = require('socket.io')(server);


//conecta com o base do site mlab
mongoose.connect(
    "mongodb://react-native-db:reactnative123@ds127655.mlab.com:27655/react-native-db", {
        useNewUrlParser: true
    }
);

//Cria uma nova variavel dentro de req, interceptador que envia informações em tempo real
app.use((req, res, next) => {
    req.io = io;
    return next();
});

//define json para manipular o banco
app.use(express.json());

app.use(cors());

//importa as rotas
app.use(require('./routes'));


server.listen(3000, () =>{
    console.log(' :D Server started on port 3000');
});
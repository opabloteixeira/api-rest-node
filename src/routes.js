const express = require('express');

const routes  = express.Router();

//importa os controllers
const TweetController = require('./controllers/TweetController');
const LikeController  = require('./controllers/LikeController');

// routes.get('/', (req, res) => {
//     return res.send("Hello World!");
// });

//rota de listagem de dados
routes.get('/tweets', TweetController.index);
//rota de crição de dados
routes.post('/tweets', TweetController.store);
//atualiza os likes
routes.post('/likes/:id', LikeController.store);

module.exports = routes;
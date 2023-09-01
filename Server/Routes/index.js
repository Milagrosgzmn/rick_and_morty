const {Router} = require('express');

// importar fn handlers
const getCharById = require('../Handlers/getCharById');
const login = require('../Handlers/login');
const postFav = require('../Handlers/postFav');
const deleteFav = require('../Handlers/deleteFav');
const postUser = require('../Handlers/postUser');


const mainRouter = Router();

//routas
mainRouter.get('/character/:id', getCharById)

mainRouter.post('/signup', postUser)
mainRouter.post('/login', login)

/* 
mainRouter.post('/fav', postFav)

mainRouter.delete('/fav/:id', deleteFav) */

module.exports= mainRouter;
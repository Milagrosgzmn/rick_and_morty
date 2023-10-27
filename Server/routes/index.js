const {Router} = require('express');

// importar fn handlers
const getCharById = require('../handlers/getCharById');
const login = require('../handlers/login');
const postFav = require('../handlers/postFav');
const deleteFav = require('../handlers/deleteFav');
const postUser = require('../handlers/postUser');


const mainRouter = Router();

//routas
mainRouter.get('/character/:id', getCharById)

mainRouter.post('/signup', postUser)
mainRouter.post('/login', login)
mainRouter.post('/fav', postFav)

mainRouter.delete('/fav/:id', deleteFav)


module.exports= mainRouter;
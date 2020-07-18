const express = require('express');
const routes = require('./routes');
const nunjucks = require('nunjucks');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));
server.use(routes);
server.use(express.static("public"));

// server.use(express.urlencoded({ extended: true }))

server.use( ( res, req, next ) => {
    const error = new Error( 'Não encontrado' );
    error.status = 404;
    next(error);
})

server.use( ( error, req, res, next ) => {
    res.status( error.status || 500 );
    return res.send({
        error: {
            message: error.message
        }
    })
})

server.set('view engine', "njk");
nunjucks.configure('src/views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(3333);  
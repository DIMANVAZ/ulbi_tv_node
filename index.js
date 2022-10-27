const http = require('http');
const Emitter = require('events');
const emitter = new Emitter();

const port = process.env.PORT || 5000;
const Router = require('./framework/Router.js');

const router = new Router();
// создадим через посредника пару эндпоинтов
router.get('/users', (req,res) => {
    res.end('you called USERS');
})

router.get('/posts', (req,res) => {
    res.end('you called POSTS');
})

const server =

server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log('listening on port  ' + port);
});
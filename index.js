const Application = require('./framework/Application.js');
const app = new Application();

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

app.addRouter(router);

app.listen(port, ()=> {console.log(`Server listening on ${port}`)});
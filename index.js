const Application = require('./framework/Application.js');
const app = new Application();

// middleware для добавления заголовков
const jsonParse = require('./framework/middlewares/parseJson.js');
app.use(jsonParse);

// middleware для распознавания тела запроса
const bodyParser = require('./framework/middlewares/parseBody.js');
app.use(bodyParser);

const router = require('./src/user-router.js');
app.addRouter(router);

const port = process.env.PORT || 5000;
app.listen(port, ()=> {console.log(`Server listening on ${port}`)});
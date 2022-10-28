const Application = require('./framework/Application.js');
const app = new Application();
const port = process.env.PORT || 5000;

// // middleware для распознавания тела запроса
// const bodyParser = require('./framework/middlewares/parseBody.js');
// app.use(bodyParser);

// middleware для добавления заголовков
const jsonParse = require('./framework/middlewares/parseJson.js');
app.use(jsonParse);

// парсим URL
const urlParser = require('./framework/middlewares/parseURL.js');
app.use(urlParser('http://localhost:5000'));

const router = require('./src/user-router.js');
app.addRouter(router);

app.listen(port, () => {console.log(`Server listening on ${port}`)});
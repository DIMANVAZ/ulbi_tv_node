const dotenv = require('dotenv');
dotenv.config();

const Application = require('./framework/Application.js');
const app = new Application();
const port = process.env.PORT || 5000;

const mongoLogin = process.env.MONGO_LOGIN;
const mongoPsw = process.env.MONGO_PASSWORD;
const mongoCluster = process.env.MONGO_CLUSTER;
const mongoDatabase = process.env.MONGO_DATABASE;

const {mongoose} = require('mongoose');
const uri = `mongodb+srv://${mongoLogin}:${mongoPsw}@${mongoCluster}.zrgosl2.mongodb.net/?retryWrites=true&w=majority`;

// middleware для добавления заголовков
const jsonParse = require('./framework/middlewares/parseJson.js');
app.use(jsonParse);

// парсим URL
const urlParser = require('./framework/middlewares/parseURL.js');
app.use(urlParser('http://localhost:5000'));

const router = require('./src/user-router.js');
app.addRouter(router);

async function start() {
    try {
        await mongoose.connect(uri,{dbName:`${mongoDatabase}`});
        app.listen(port, () => {console.log(`Server listening on ${port}`)});
    } catch (err) {
        console.log(err);
    }
}

start()
    .then(() => console.log('started'))
    .catch(err => console.log(err));
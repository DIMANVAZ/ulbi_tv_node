const Router = require('../framework/Router.js');
const router = new Router();

const {getUsers, addUser}  = require('./user-controller.js');

// создадим через посредника эндпоинт
router.get('/users', getUsers);

router.post('/users', addUser);

module.exports = router;
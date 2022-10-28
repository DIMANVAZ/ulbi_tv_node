const Router = require('../framework/Router.js');
const router = new Router();

const users = [
    {id: 1, name: 'Ayrat'},
    {id: 2, name: 'Regina'}
]

// создадим через посредника эндпоинт
router.get('/users', (req,res) => {
    res.send(users); // метод send прописан в middleware
})

router.post('/users', (req,res) => {
    if(req.body){
        console.log(req.body)
        var newUser = req.body;
        users.push(newUser);
    }
    res.send(newUser); // у req теперь есть метод body, т.к. мы его ему создали
})

module.exports = router;
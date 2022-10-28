const users = [
    {id: 1, name: 'Ayrat'},
    {id: 2, name: 'Regina'}
]

function getUsers(req, res){
    console.log(req.params);
    if (req.params.id) { // если в строке запроса прилетел id, то ищем пользователя
        const user = users.find(user => +user.id === +req.params.id);
        return res.send(user);
    }
    res.send(users); // метод send прописан в middleware
}

function addUser(req, res){
    const newUser = req.body; // У req теперь есть метод body, т.к. мы его ему создали
    users.push(newUser);
    res.send(newUser);
}

module.exports = {
    getUsers,
    addUser
}
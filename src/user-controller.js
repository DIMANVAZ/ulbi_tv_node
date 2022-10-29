const ulbi_Model = require('../mongo_db/mongo.js');

async function getUsers(req, res){
    let users;
    try{
        if(req.params.id){
            users = await ulbi_Model.findById(req.params.id);
        } else users = await ulbi_Model.find();
        console.log(users);
    } catch(err){
        console.log(err);
    }
    res.send(users); // метод send прописан в middleware
}

async function addUser(req, res){
    const {name='Alarm', password="Oh,no!"} = req.body;
    await ulbi_Model.create({name,password});
    res.send({name, password});
}

module.exports = {
    getUsers,
    addUser
}
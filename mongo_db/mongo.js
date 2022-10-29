const {mongoose} = require('mongoose');
const node_Ulbi_Schema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    //{ collection : 'node_Ulbi_Collection' } - указываем эту опцию, если хотим писать в существующую коллекцию
);

module.exports = mongoose.model('ulbi_Model',node_Ulbi_Schema); // раз экспортим, то поименуем в другом файле


const {mongoose,Schema} = require('mongoose');
const node_Ulbi_Schema = new Schema({
        id:{
            type:Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
    },
    //{ collection : 'node_Ulbi_Collection' } - указываем эту опцию, если хотим писать в существующую коллекцию
);
const ulbi_Model = mongoose.model('ulbi_Model',node_Ulbi_Schema);
const uri = 'mongodb+srv://telegram-db-admin:!!!!!!!!!!@clusterfornodeulbi.uuwm5vl.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(uri, {useNewUrlParser: true}).then(res => {
    console.log('Connected');
    const document = new ulbi_Model({id:5, name: 'Volodya'});
    document.save();
});
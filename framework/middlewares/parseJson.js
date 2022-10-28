// middleware для добавления заголовков

module.exports = function(req, res){
    res.send = (data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data))
    }
}
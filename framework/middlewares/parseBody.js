module.exports = function(req, res, next){
    let chunks = [];
    req.on('data', function(chunk){
        chunks.push(chunk);
    })
    req.on('end', function(){
        const data = Buffer.concat(chunks).toString('utf-8');
        if (data){
            req.body = JSON.parse(data);
            console.log(req.body);
            next();
        }
    })
}
const http = require('http');
const Emitter = require('events');

module.exports = class Application{
    constructor() {
        this.server = this._createServer();
        this.emitter = new Emitter();
    }

    _createServer(){
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res); // эмитим и передаём в хэндлер аргументы
            if(!emitted) {
                res.end()
            }
        })
    }

    _getRouteMask(path, method){
        return `[${path}]:[${method}]`
    }
}
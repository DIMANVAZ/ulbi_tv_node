const http = require('http');
const Emitter = require('events');

module.exports = class Application{
    constructor() {
        this.server = this._createServer();
        this.emitter = new Emitter();
    }

    _createServer(){
        return http.createServer((req, res) => {
            // эмитим и передаём в хэндлер аргументы. .emit возвращает boolean;
            const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);
            if(!emitted) {
                res.end()
            }
        })
    }

    // слушать порт
    listen (port, callback){
        this.server.listen(port, callback);
    }

    // добавляет в приложение роутер, перебирает все эндпоинты и
    // подписывает хэндлеры из них на сгенерированные под них же и события
    addRouter(router){
        Object.keys(router.endpoints).forEach(path => { // для каждого роута типа '/users
            const endpoinsForPath = router.endpoints[path];  // ... получили объект - кучку эндпоинтов
            Object.keys(endpoinsForPath).forEach(method => { // для каждого метода...

                const handler = endpoinsForPath[method]; // ...вытащили handler

                // Подписали на события (раньше этот кусок был в роутере).
                // При наступлении события типа [/users]:[GET] будет вызван хандлер
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    handler(req, res);
                });
            })
        })
    }

    // возвращает маску события
    _getRouteMask(path, method){
        return `[${path}]:[${method}]`
    }
}
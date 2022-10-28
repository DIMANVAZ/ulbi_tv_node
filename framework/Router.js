module.exports = class Router{
    constructor(){
        this.endpoints = {}; // структура эндпоинта = см папку hints
    }

    // чтобы наполнять эндпоинты
    request(method='GET', path, handler){
        if(!this.endpoints[path]){
            this.endpoints[path] = {};
        }
        const endpoint = this.endpoints[path]; // вынесли отдельно, чтобы работать с ним

        if(endpoint[method]){
            throw new Error(`Метод ${method} по адресу ${path} уже существует`);
        }
        endpoint[method] = handler; // назначили функцию
    }

    // пишем оболочки-обёртки над request, чтобы чуть сократить и упростить его вызов
    get(path, handler) {
        this.request('GET', path, handler);
    }
    put(path, handler) {
        this.request('PUT', path, handler);
    }
    post(path, handler) {
        this.request('POST', path, handler);
    }
    delete(path, handler) {
        this.request('DELETE', path, handler);
    }
}

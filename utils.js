module.exports = {
    
    //Solo funciona con test async, el metodo de uso es escribir await sleep(segundos) dentro del codigo
    sleep(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }
}
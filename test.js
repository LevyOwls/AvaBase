const test = require("ava");
const all = require("./all");
const ut = require("./utils");


//Realizar multiples test con data obtenida de un json
all(require('./test.json'),(data,iteracion) => {
    test.serial(`test ${iteracion}: ${data.descripcion}`,async t => {
        t.is(data.input,data.output)
    });
})


//Esperar segundos dentro de un test
test.serial('soy un test de sleep', async t => {
    await ut.sleep(5)
    t.is(1,1)
})







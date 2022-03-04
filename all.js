module.exports = (data,test) => {
    const valor = Array.isArray(data) ? data : [data];

    valor.forEach((valor,indice) => {
        test(valor,indice+1)
    })
};
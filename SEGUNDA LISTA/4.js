function novoObjeto (objeto, atributo){

    const novoObjeto = Object.assign({}, objeto);

    delete novoObjeto[atributo];

    return novoObjeto;
}

console.log(novoObjeto({a: 1, b: 2}, "a"))
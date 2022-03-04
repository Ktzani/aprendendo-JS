const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: 'red',
    main: '#64dd17',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',

    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

let elementos = document.querySelectorAll('.tag')

elementos.forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase() //Para pegar aquele elemento usamos tagName

    elemento.style.borderColor = colors.get(tagName);

    //o elemento é meu box e dentro dele eu tenho uma lista de classes em que eu posso aplicar nesse elemento
    //OBS: no nosso caso inicial temos apenas uma classe aplicada a cada elemento (pode-se ter uma lista de classes)

    //Portanto, nesse caso é que se na lista de classes desse elemento tiver uma classe 'nolabel', não é pra entrar
    //no if
    if(!elemento.classList.contains('nolabel')){
        //injeto dentro de todos os elementos/boxes que estão marcados com classe '.tag' o elemento '<label>'
        const label = document.createElement('label'); 
        label.style.backgroundColor = colors.get(tagName);
        label.innerHTML = tagName;
        elemento.insertBefore(label, elemento.childNodes[0]); //childNodes[0] é antes do primeiro elemento filho 
                                                              //que esteja eventualmente presente dentro dessa tag,
                                                              //ou seja, antes de qualquer coisa vai ter esse label 
                                                              //dentro de cada um desses elementos
    }
})
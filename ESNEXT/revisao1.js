//let e const -> Lembrar: let tem escopo de bloco, diferente do var que tem escopo global
{
    var a = 2;
    let b = 3
    console.log(b)
}

console.log(a)

//Template String
const produto = 'Ipad';
console.log(`${produto} é caro!`) //IMP: Com template é possivel quebra-lo em mais de uma linha, o que não é possivel com '' e ""

//Desestructuring -> Retirar de uma estrutura algo
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome: n} = {nome: "Ana", idade: 9}
console.log(i, n)
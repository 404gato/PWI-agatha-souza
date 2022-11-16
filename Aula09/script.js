
const demo = document.getElementById("demo")
const dois = document.getElementById("dois")


let text = "Bruno Gonçales Coelho de Sousa"
let part = text.slice(-5)
let tamanho = text.length
document.getElementById("demo").innerHTML = part ;
document.getElementById("demo2").innerHTML = tamanho ;

function mudacor() {
    demo.classList.toggle("azul")
    document.getElementById("demo2").classList.toggle("azul")
    dois.classList.toggle("remulexo")
}

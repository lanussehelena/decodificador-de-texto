const texto = document.querySelector("textarea");
const botaoCriptografar = document.querySelector(".botao-criptografar");
const botaoDescriptografar = document.querySelector(".botao-descriptografar");
const conteudoCriptografado = document.querySelector(".conteudo-texto-criptografado");
const subtituirConteudoImg = document.querySelector(".substituir-conteudo-img");
const subtituirConteudoH2 = document.querySelector(".substituir-conteudo-h2");
const subtituirParagrafo = document.querySelector(".substituir-conteudo-paragrafo");
const botaoCopiar = document.querySelector(".botao-copiar");

const mapeamento = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const mapeamentoInverso = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

let valorTextoCripto = "";

botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(valorTextoCripto)
});

botaoCriptografar.addEventListener("click", criptografar);

botaoDescriptografar.addEventListener("click", descriptografar);

// function criptografar() {
//     const textoArray = texto.value.split("");
//     const textoMapeado = textoArray.map((valor) => {
//         return mapeamento[valor] ? mapeamento[valor] : valor;
//     })
//     const textoCriptografado = textoMapeado.join("");
//     valorTextoCripto = textoCriptografado
//     subtituirConteudoImg.classList.add("esconder-conteudo");
//     subtituirConteudoH2.classList.add("esconder-conteudo");
//     subtituirParagrafo.innerHTML = textoCriptografado;
//     botaoCopiar.classList.add("mostrar-conteudo");
// }

function criptografar() {
    const mapeamentoChaves = Object.keys(mapeamento);
    let textoCriptografado = texto.value;
    mapeamentoChaves.forEach(element => {
        textoCriptografado = textoCriptografado.replaceAll(element, (match) => {
          return mapeamento[match]
        });
    });
    valorTextoCripto = textoCriptografado;
    subtituirParagrafo.innerHTML = textoCriptografado;
    subtituirConteudo();
}

function descriptografar() {
    const mapeamentoChaves = Object.keys(mapeamentoInverso);
    let textoDescriptografado = valorTextoCripto;
    mapeamentoChaves.forEach(element => {
        textoDescriptografado = textoDescriptografado.replaceAll(element, (match) => {
          return mapeamentoInverso[match]
        });
    });
    valorTextoCripto = textoDescriptografado;
    subtituirParagrafo.innerHTML = textoDescriptografado;
    subtituirConteudo();
}

function subtituirConteudo() {
    subtituirConteudoImg.classList.add("esconder-conteudo");
    subtituirConteudoH2.classList.add("esconder-conteudo");
    botaoCopiar.classList.add("mostrar-conteudo");
}
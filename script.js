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

botaoCriptografar.addEventListener("click", () => {
    criptografia(mapeamento, texto.value)
});

botaoDescriptografar.addEventListener("click", () => {
    criptografia(mapeamentoInverso, texto.value)
});

function subtituirConteudo() {
    subtituirConteudoImg.classList.add("esconder-conteudo");
    subtituirConteudoH2.classList.add("esconder-conteudo");
    botaoCopiar.classList.add("mostrar-conteudo");
}

function criptografia(mapeamento, valorTexto) {
    const mapeamentoChaves = Object.keys(mapeamento);
    let textoCriptografado = valorTexto;
    mapeamentoChaves.forEach(element => {
        textoCriptografado = textoCriptografado.replaceAll(element, (match) => {
          return mapeamento[match]
        });
    });
    valorTextoCripto = textoCriptografado;
    subtituirParagrafo.innerHTML = textoCriptografado;
    subtituirConteudo();
}
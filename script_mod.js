
    const titulo = document.querySelector("#titulo");
    titulo.textContent = "Novo Título Simples";
    titulo.innerHTML = "Novo Título com <strong>Negrito</strong>";

    const paragrafo = document.querySelector("#paragrafo");
    paragrafo.classList.add("ativo");
    paragrafo.classList.toggle("destaque");

    const Imagem = document.querySelector("#imgcaixa");
    Imagem.setAttribute("src", "novacaixa.webp");
    Imagem.removeAttribute("alt");

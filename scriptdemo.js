// 1. Agarrar os elementos HTML que vamos interagir usando querySelector
const titulo = document.querySelector("#tituloPrincipal");
const botao = document.querySelector("#botaoMudarTexto");

// 2. Definir uma função (nossa "receita") que muda o texto e a classe do título
function mudarTextoEEstiloDoTitulo() {
    // Altera o texto do título
    if (titulo.textContent === "Olá, Mundo do JavaScript!") {
        titulo.textContent = "Aula JS";
        titulo.classList.add("titulo-ativo"); // Adiciona uma classe para mudar o estilo
    } else {
        titulo.textContent = "Olá, Mundo do JavaScript!";
        titulo.classList.remove("titulo-ativo"); // Remove a classe para voltar ao normal
    }
}

// 3. Adicionar um ouvinte de evento ao botão
// Quando o botão for clicado, a função 'mudarTextoEEstiloDoTitulo' será executada
botao.addEventListener('click', mudarTextoEEstiloDoTitulo);

console.log("Script carregado e pronto para interagir!");

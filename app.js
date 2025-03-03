let numerosSorteados = [];
let btnSortear = document.getElementById("btn-sortear");
let btnReiniciar = document.getElementById("btn-reiniciar");
let resultado = document.querySelector("#resultado");

function gerarNumeroAleatorio(min, max) {
  let numeroSorteado = Math.floor(Math.random() * (max - min + 1) + min);

  if (numerosSorteados.includes(numeroSorteado)) {
    return gerarNumeroAleatorio(min, max);
  } else {
    numerosSorteados.push(numeroSorteado);
  }
}

function reiniciar() {
  alterarStatusBotao(btnReiniciar);
  btnSortear.removeAttribute("disabled");

  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  numerosSorteados = [];

  resultado.innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
}

function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let numeroMin = parseInt(document.getElementById("de").value);
  let numeroMax = parseInt(document.getElementById("ate").value);

  if (numeroMin >= numeroMax) {
    return alert("O valor mínimo não pode ser maior que o valor máximo!");
  }
  if (numeroMax <= numeroMin) {
    return alert("O valor máximo não pode ser menor que o valor mínimo!");
  }

  if (quantidade > numeroMax - numeroMin + 1) {
    return alert(
      `A quantidade a sortear não pode exceder ${numeroMax - numeroMin + 1}!`
    );
  }

  if (isNaN(quantidade) || isNaN(numeroMin) || isNaN(numeroMax)) {
    return alert("Preencha todos os campos!");
  }

  for (let i = 1; i <= quantidade; i++) {
    gerarNumeroAleatorio(numeroMin, numeroMax);
  }

  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;

  btnSortear.setAttribute("disabled", true);
  alterarStatusBotao(btnReiniciar);
}
function alterarStatusBotao(elemento) {
  if (elemento.classList.contains("container__botao-desabilitado")) {
    elemento.classList.remove("container__botao-desabilitado");
    elemento.classList.add("container__botao");
  } else {
    elemento.classList.add("container__botao-desabilitado");
    elemento.classList.remove("container__botao");
  }
}

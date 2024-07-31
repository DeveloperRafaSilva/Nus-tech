const dataNumeroAnimacao = document.querySelectorAll("[data-numeros-animacao]");
const dataSecaoAnimaNumeros = document.querySelector("[data-secao-anima-numeros]");
let animado = false;

function animacaoNumeros() {
  dataNumeroAnimacao.forEach(itemNumeros => {
    const total = +itemNumeros.innerText;
    const incrementar = Math.ceil(total / 100);
    let start = 0;
    const tempo = setInterval(() => {
      start = start + incrementar;
      itemNumeros.innerText = start;
      if (start >= total) {
        itemNumeros.innerText = total.toFixed(3);
        clearInterval(tempo);
      }
    }, 150 * Math.random());
  });
}

window.addEventListener("scroll", () => {
  const secaoTop = dataSecaoAnimaNumeros.getBoundingClientRect().top;
  if (!animado && secaoTop < window.innerHeight && secaoTop >= 0) {
    animado = true;
    animacaoNumeros();
  }
});

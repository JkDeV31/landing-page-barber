// Desativa efeitos de entrada quando o usuário prefere movimento reduzido.
AOS.init({
  disable: function () {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
});
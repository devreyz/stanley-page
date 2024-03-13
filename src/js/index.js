const produtoImagem = document.querySelector(".produto-imagem");

const produto = {
  nome: "Copo Stanley",
  variacoes: [
    {
      nome: "Copo Stanley Azalea",
      cor: { nome: "Azalea", hex: "#d869b4" },
      imgSrc: "copo Azalea cor.jpg",
    },
    {
      nome: "Copo Stanley Azul",
      cor: { nome: "Azul", hex: "#40699c" },
      imgSrc: "copo Azul cor.jpg",
    },
    {
      nome: "Copo Stanley Lagoon",
      cor: { nome: "Lagoon", hex: "#4392b0" },
      imgSrc: "copo Lagoon cor.jpg",
    },
    {
      nome: "Copo Stanley Laranja",
      cor: { nome: "Laranja", hex: "#d46521" },
      imgSrc: "copo Laranja cor.jpg",
    },
    {
      nome: "Copo Stanley Limestone",
      cor: { nome: "Limestone", hex: "#dbc3bf" },
      imgSrc: "copo Limestone cor.jpg",
    },
    {
      nome: "Copo Stanley Polar",
      cor: { nome: "Polar", hex: "#d0ccc8" },
      imgSrc: "copo Polar cor.jpg",
    },
  ],
};

const selectColorContent = document.createElement("div");
selectColorContent.classList.add("select-color");

produto.variacoes.forEach((item) => {
  selectColorContent.innerHTML += `<label class="color-label">
                    <input
                      type="radio"
                      name="color-choice"
                      value="White"
                      class="sr-only"
                      aria-labelledby="color-choice-0-label"
                    />
                    <span id="color-choice-0-label" class="sr-only">White</span>
                    <span aria-hidden="true" class="color-icon bg-white"></span>
                  </label>`;
});

document.querySelector(".select-color").innerHTML = selectColorContent.innerHTML
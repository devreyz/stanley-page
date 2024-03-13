const produtoImagem = document.querySelector(".produto-imagem");
const produtoNome = document.querySelector(".product-name");
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

let selectColorContent = document.createElement("div");
selectColorContent.classList.add("select-color");

produto.variacoes.forEach((item) => {
  let label = document.createElement("label");
  let input = document.createElement("input");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");

  // Define as propriedades dos elementos
  label.className = "color-label";
  input.type = "radio";
  input.name = "color-choice";
  input.value = item.cor.nome;
  input.className = "sr-only";
  input.setAttribute("aria-labelledby", `color-choice-0-label`);
  span1.id = `color-choice-0-label`;
  span1.className = "sr-only";
  span1.innerText = item.nome;
  span2.setAttribute("aria-hidden", "true");
  span2.className = `color-icon`;
  span2.style.background = item.cor.hex.toLowerCase()

  // Anexa os elementos filhos ao elemento pai
  label.appendChild(input);
  label.appendChild(span1);
  label.appendChild(span2);
input.oninput = () =>{
    produtoNome.textContent = item.nome
    produtoImagem.src = "./assets/img/" +item.imgSrc
}

selectColorContent.appendChild(label);

});

document.querySelector(".select-color").appendChild(selectColorContent)

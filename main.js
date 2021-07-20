// DOM Document Object Model

/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE "HAMBURGER" E "X" */
const nav = document.querySelector("#header nav"); //aqui dizemos ao 'document' para procurar todo o seletor que tenha #header e o nav, e colocar eles dentro da constante 'nav'.
const toggle = document.querySelectorAll("nav .toggle"); //aqui dizemos ao 'toggle' para procurar todo o seletor que tenha o nav e a classe togle, e colocar eles dentro da constante 'toggle'.

//repetição 'for'
//para cada toggle, adicionar a função 'show' e colocá-la no evento 'click' e dentro da const 'element'
for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}
//a função acima diz para o 'nav' colocar a classe 'show' (caso ela não tenha) ou retire a classe 'show' caso ela tenha. Tod vez que clicarmos no ícone do menu.

// a const 'element' é a 'div' que tem a class 'toggle icon-menu' e 'toggle icon-close'

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU */
const links = document.querySelectorAll("nav ul li a");
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* mudar o header da página quando executarmos o scroll - colocar um sombreamento no divisor do header */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight; //aqui pegamos o deslocamento da altura (offset) do header

function changeHeaderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    //aqui se o scroll é maior ou igual à altura do header fazemos algo
    header.classList.add("scroll");
  } else {
    // menor que a altura do header fazemos outra coisa
    header.classList.remove("scroll");
  }
}

/* TESTIMONIALS SLIDER SWIPER */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  /* abaixo fazemos o "box" de cada depoimento para devides >= 767px */
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* SCROLLREVEAL - ELE MOSTRA OS ELEMENTOS QUANDO DAR O SCROLL NA PÁGINA */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  ` #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services.card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
  { interval: 100 }
);

/* BOTÃO VOLTAR PARA O TOPO */
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  if (this.window.scrollY >= 600) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;   /* aqui dividimos a section em 8 e multiplicou por 4 para que a lógica montada resulte na mudança das sections e o menu de cada section ativa fique com a barra ativada e as letras com bold */

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

/* WHEN SCROLL */
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

/* inicialmente o Mayk tinha feito essa lógica para fazermos o scroll. Depois ele mostrou 
um jeito mais elaborado/eficiente que é o que estamos usando acima no "mudar o header da página quando executarmos o scroll" 

esse código estava na linha 26 à 38

const header = document.querySelector("#header");
  const navHeight = header.offsetHeight; //aqui pegamos o deslocamento da altura (offset) do header

window.addEventListener("scroll", function () {
  if (this.window.scrolly >= navHeight) {
    //aqui se o scroll é maior ou igual à altura do header fazemos algo
    header.classList.add("scroll");
  } else {
    // menor que a altura do header fazemos outra coisa
    header.classList.remove("scroll");
  }
});
*/

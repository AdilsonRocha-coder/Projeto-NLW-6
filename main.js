// DOM Document Object Model

/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE "HAMBURGER" E "X" */
const nav = document.querySelector('#header nav')  //aqui dizemos ao 'document' para procurar todo o seletor que tenha #header e o nav, e colocar eles dentro da constante 'nav'.
const toggle = document.querySelectorAll('nav .toggle')  //aqui dizemos ao 'toggle' para procurar todo o seletor que tenha o nav e a classe togle, e colocar eles dentro da constante 'toggle'.


//repetição 'for'
//para cada toggle, adicionar a função 'show' e colocá-la no evento 'click' e dentro da const 'element'
for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}
//a função acima dia para o 'nav' colocar a classe 'show' (caso ela não tenha) ou retire a classe 'show' caso ela tenha. Tod vez que clicarmos no ícone do menu.

// a const 'element' é a 'div' que tem a class 'toggle icon-menu' e 'toggle icon-close'

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando executarmos o scroll */
const header = document.querySelector("#header")
const navHeight = header.offsetHeight //aqui pegamos o deslocamento da altura (offset) do header

window.addEventListener('scroll', function () {
    if (this.window.scrolly >= navHeight) {
        //aqui se o scroll é maior ou igual à altura do header fazemos algo
        header.classList.add('scroll')
    } else {
        // menor que a altura do header fazemos outra coisa
        header.classList.remove('scroll')
    }
})



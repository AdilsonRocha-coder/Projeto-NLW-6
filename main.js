// DOM Document Object Model
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


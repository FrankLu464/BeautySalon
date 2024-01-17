// DOM Document Object Model
/* Abre e fecha o Menu quando clicar nos icones*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

 /* A constante 'element' representa a 'div' no HTML, na linha 36 e 37 */
for(const element of toggle) {
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    } )
}

/* Quando clicar em um item do menu,esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* Mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
   
function changeHeaderWhenScroll(){       
    /* Quando a página estiver em tamanho mobile: < 767 */
    if(this.window.scrollY >= navHeight) {
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    } else{
       //menor que a altura do header
       header.classList.remove('scroll') 
    }
}


/* SCROLLREAVEL: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
     { interval: 100 })

     /* BOTÃO VOLTAR PARA O TOPO */

     const buttonTop = document.querySelector('.back-to-top')

     function backToTop (){
        if(this.window.scrollY >= 800){
            buttonTop.classList.add('show') 
         } else {
             buttonTop.classList.remove('show') 
         }
     }

     /* MENU ATIVO CONFORME A SEÇÃO VISÍVEL NA PÁGINA */
     const sections = document.querySelectorAll('section[id]')
     function activateMenuAtCurrentSection (){
        const checkPoint = this.window.pageYOffset + (this.window.innerHeight / 8) * 4

        for(const section of sections) {
            const sectionTop = section.offsetTop
            const sectionHeight = section.offsetHeight
            const sectionId = section.getAttribute('id')

           const checkPointStart = checkPoint >= sectionTop
           const checkPointEnd = checkPoint <= sectionTop + sectionHeight

           if(checkPointStart && checkPointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + '] ')
            .classList.add('active')
           } else {
            document.querySelector('nav ul li a[href*=' + sectionId + '] ')
            .classList.remove('active')
           }
        }

        
     }

     
        /* WHEN SCROLL */
         window.addEventListener('scroll', function (){
            changeHeaderWhenScroll()
            backToTop()
            activateMenuAtCurrentSection ()
        })




const cabecalhoMenu = document.querySelector('.cabecalho-menu'),
    navBar = document.querySelector('.navbar-toggle'),
    menuClose = document.querySelector('.menu-close');

/*==================== MENU MOBILE ====================*/
if(navBar) {
    navBar.addEventListener('click', () => {
        cabecalhoMenu.classList.add('show-menu');
    })
}

if(menuClose) {
    menuClose.addEventListener('click', () => {
        cabecalhoMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const menuItem = document.querySelectorAll('.menu-item');

function linkAction(){
    cabecalhoMenu.classList.remove('show-menu');
}
menuItem.forEach(n => n.addEventListener('click', linkAction));

/*==================== FERRAMENTAS ABERTO-FECHADO ====================*/
const ferramentasConteudo = document.getElementsByClassName('ferramentas-conteudo');

const ferramentasCabecalho = document.querySelectorAll('.ferramentas-cabecalho');

function toggleFerramentas() {
    let itemClass = this.parentNode.className;

    for(i = 0; i < ferramentasConteudo.length; i++) {
        ferramentasConteudo[i].className = 'ferramentas-conteudo ferramentas-fechado';
    }

    if(itemClass === 'ferramentas-conteudo ferramentas-fechado') {
        this.parentNode.className = 'ferramentas-conteudo ferramentas-aberto';
    }
}

ferramentasCabecalho.forEach((el) => {
    el.addEventListener('click', toggleFerramentas);
})

/*==================== PROJETOS SWIPER ====================*/
let swiper = new Swiper('.projetos-container', {
    cssMode: true,
    spaceBetween: 10,
    loop: true,
    slidesPerView: 1,
    loopedSlides: 2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
            loopedSlides: 5,
        },
        /*768: {
            slidesPerView: 4,
        }*/
    },
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.cabecalho-menu a[href*=' + sectionId + ']').classList.add('active-item');
        }else{
            document.querySelector('.cabecalho-menu a[href*=' + sectionId + ']').classList.remove('active-item');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('cabecalho');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-cabecalho'); else nav.classList.remove('scroll-cabecalho');
}
window.addEventListener('scroll', scrollHeader);




/*==================== INICIO ====================*/ 

var quotes = [{
    quote: 'Bem-vindo ao meu portfólio. Deseja continuar?',
    author: 'Maira Silva',
    link: '#'
}];

// vars
var i = 0;
var result = [];
var element = document.getElementById('quote');
var htmlOutput;

function output() {
    htmlOutput = '<p>' + quotes[0].quote + '</p>' + '<footer><a href="#sobre" class="brackets author">' + 
    quotes[0].author + '</a><span class="cursor blink">&#9646;</span></footer>';

    return render();
};

output();

var isTag, char, text;

function render() {
    //console.log('i',i);

    text = htmlOutput.slice(0, i++);

    if (text === htmlOutput) return i = 0;

    element.innerHTML = text + '&#9646;';

    char = text.slice(-1);

    if (char === '<') isTag = true;
    if (char === '>') isTag = false;

    if (isTag) return render();

    return setTimeout(render, 20);
};
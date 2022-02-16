function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function decidirBotaoScroll() {
    if(window.scrollY <= 200) {
        // ocultar o botao
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        // mostrar o botao
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

// setInterval(decidirBotaoScroll, 1); [essa propriedade do JS executa a funcao no intervalo de tempo decidido no numero final (este em milisegundos).]

window.addEventListener('scroll', decidirBotaoScroll);
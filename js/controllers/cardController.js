'use strict'
const cardController = {
    carregaDescricao: (id) => {
        const element = document.getElementById(id).parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        const numeroId = id.split('')
        let a = document.querySelectorAll(".manga-selecionado")
        
        a.forEach((e) => {
            // e.style.transition = "all 3s ease";
            e.remove()
        })
        const test = document.createElement('section')
        test.className = "manga-selecionado"
        test.style.backgroundImage = `url('img/banner-${numeroId[4]}.jpeg')`
        test.innerHTML = `            
                                <div class="container">
                                    <h3 class="titulo">FULLMETAL ALCHEMIST</h3>
                                    <p class="descricao">Os irmão Elric, dois irmãos alchemistas buscando a predra filosofal para recuperarem seu corpos</p>
                                    <div class="botoes">
                                        <button role="button" class="botao">
                                            <i class="fas fa-play"></i>
                                            LER AGORA
                                        </button>
                                        <button role="button" class="botao">
                                            <i class="fas fa-info-circle"></i>
                                            MAIS INFORMAÇÕES
                                        </button>
                                    </div>
                                </div>
                                <div id="ler-agora">

                                </div>           
                                <div id="mais-informacoes">

                                </div>`
        test.style.transition = "all 1s ease";
        test.style.opacity = '0'
        element.append(test)
        setInterval(() => {
            test.style.opacity = "1"
            test.style.height = "400px"
        }, 10)
    },
    obtemCards: function(){
        const cards = document.querySelectorAll(".card")
        cards.forEach((e) => {
            console.log(e)
            e.addEventListener('click', () => {
                console.log(e)
                this.carregaDescricao(e.id)
            })
        })
    }
}
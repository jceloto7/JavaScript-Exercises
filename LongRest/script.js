const html = document.querySelector('html')
const longBt = document.querySelector('.app__card-button--longo')

longBt.addEventListener('click',() =>{
    html.setAttribute('data-contexto','descanso-longo')
})

function carregar() {
const msg = window.document.getElementById('msg')
const img = window.document.getElementById('foto')
var hora = new Date().getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = 'imagens/foto-manha.png'
} else if (hora <= 18) {
    //Boa Tarde!
    img.src = 'imagens/foto-tarde.png'
} else {
    //Boa noite
    img.src = 'imagens/foto-noite.png'
}
}
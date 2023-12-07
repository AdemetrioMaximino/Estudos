function verificar() {
    var pais = document.querySelector('input#pais').value
    const res = document.querySelector('div#res')
    if (pais != 'Brasil') {
        res.innerHTML = '<p><strong>Você é gringo(a)!</strong></p>'
    } else {
        res.innerHTML = '<p><strong>Você é brasileiro(a)!</strong></p>'
    }
}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var forAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Number(forAno.value.length) == 0 || Number(forAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var forSex = document.getElementsByName('radsex')
        var idade = ano - Number(forAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        if (forSex[0].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'img/Menina.png')
            } else if (idade < 27) {
                // Jovem
                img.setAttribute('src', 'img/MulherJovem.png')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', 'img/MulherAdulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/MulherIdosa.png')
            }
        } else if (forSex[1].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'img/Menino.png')
            } else if (idade < 27) {
                // Jovem
                img.setAttribute('src', 'img/HomemJovem.png')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', 'img/HomemAdulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/HomemIdoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
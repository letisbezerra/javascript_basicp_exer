var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 11) {
    console.log('Bom dia? Pra quem?')
} else if (hora == 12) {
    console.log('Tô morrendo de FOME!!!')
} else if (hora > 12 && hora <= 17) {
    console.log('Falta muito pras 17:30?')
} else if (hora <= 17.3) {
    console.log('Adeus! Vou mimbora!')
} else {
    console.log('Boa noite!')
}


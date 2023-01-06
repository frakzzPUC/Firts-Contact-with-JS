function carregar(){

    var msg = document.getElementById('msg') //puxa o id msg, para criação da variavel
    var img = document.getElementById('imagem') // pux o id imagem, para a criação da variavel
    var data = new Date()
    //var hora = data.getHours() //TIRE AS BARRAS NESSA LINHA E ACRESCENTE NA DEBAIXO PARA FUNCIONAR DE ACORDO COM O HORARIO DA SUA MÁQUINA
    var hora = 15 // HORARIO ILUSTRATIVO MUDE AQUI PARA ALGUM HORARIO CASO QUEIRA TESTAR TODOS

    msg.innerHTML = `Agora são ${hora} horas`// mensagem que aparece na tela mostrando a hora de acordo com seu computador, ou pelo número que o usuario colocou na linha acima

    if(hora >=0 && hora <12) // DIA
    {
        img.src = `manha.jpg`
        document.body.style.background = '#ffff8a' // MUDA O BACKGROUND

    }else if (hora >=12 && hora <18)// TARDE
    {
        img.src = `tarde.jpg`
        document.body.style.background = '#ffbd61'// MUDA O BACKGROUND
    }
    else{ // NOITE
        img.src= `noite.jpg`
        document.body.style.background = '#001657' // MUDA O BACKGROUND
    }
}
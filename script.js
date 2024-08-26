
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if( hora >= 0 && hora < 12 ){
        //bom dia
        img.src = 'assets/manha.png'
        document.body.style.background = '#e3ecf2'
    }else if (hora >= 12 && hora < 17){
        //Boa tarde
        img.src = 'assets/tarde.png'
        document.body.style.background = '#b4754f'
    }else if (hora >= 17 && hora < 18){
        //Hora do por do sol
        img.src = 'assets/por_do_sol.png'
        document.body.style.background = '#f26800'
    }else{
        // Boa noite
        img.src = 'assets/noite.png'
        document.body.style.background = '#29003f'
    }

    

}
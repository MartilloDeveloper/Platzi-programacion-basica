// variables

let ataqueJugador
let ataqueEnemigo
let battle
let spanMascotaEnemigo 
let spanVidaEnemigo 
let spanVidaJugador
let vidasEnemigo
let vidasJugador
let spanJugadorLife 
let reinicio
let mascotas


function iniciarJuego() {
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    // display ayuda a mostrar o no algunos elementos html
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    spanVidaEnemigo = document.getElementById("vida-enemigo")
    reinicio = document.getElementById("boton-reiniciar")
    reinicio.addEventListener("click", reiniciarPartida)
    mascotas = document.getElementsByName("mascota")
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    // mostrar la section de seleccion de ataques
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"
    // variables
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let mascotaJugador = document.getElementById("mascota-jugador")
    // Condicionales
    console.log(inputHipodoge)
    if (inputHipodoge.checked){
        // alert("Seleccioanaste a Hipodoge!")
        mascotaJugador.innerHTML = "Hipodoge"
    }
    else if (inputCapipepo.checked == true){
        // alert("Seleccionaste a capipepo!")
        mascotaJugador.innerHTML = "Capipepo"
    }
    else if(inputRatigueya.checked == true){
        // alert("Seleccionaste a Ratigueya!")
        mascotaJugador.innerHTML = "Ratigueya"
    }
    else{
    alert('Elije uno, pendejo!')
    }   
    spanVidaJugador = document.getElementById("vida-jugador")
    spanVidaJugador.innerHTML = aleatorio(1, 20)
    spanJugadorLife = document.getElementById("life-jugador")
    
    if(spanVidaJugador.innerHTML == 1){
    spanJugadorLife.innerHTML = "vida"
    } else{
    spanJugadorLife.innerHTML = "vidas"
    }

    vidasJugador = spanVidaJugador.innerHTML
    console.log(vidasJugador)
    
    let seleccionarMascotaJugador = document.getElementById("boton-mascota") 
    seleccionarMascotaJugador.disabled = true
    
    seleccionarMascotaEnemigo()
    } 


function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)
    let spanEnemyLife = document.getElementById("life-enemy")

    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "hipodoge"
    }   else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }   else{
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

    spanVidaEnemigo.innerHTML = aleatorio(1, 20)

    if ( spanVidaEnemigo.innerHTML == 1){
        spanEnemyLife.innerHTML = "vida"
    } else if (spanVidaEnemigo.innerHTML > 1){
        spanEnemyLife.innerHTML = "vidas"
    }

    vidasEnemigo = spanVidaEnemigo.innerHTML
    console.log(vidasEnemigo)
}

function ataqueFuego(){
    // let ataquePlayer = document.getElementById("ataque-jugador")
    ataqueJugador = "Fuego"
    // ataquePlayer.innerHTML = "Fuego"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    // let ataquePlayer = document.getElementById("ataque-jugador")
    ataqueJugador = "Agua"
    // ataquePlayer.innerHTML =  "Agua"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    // let ataquePlayer = document.getElementById("ataque-jugador")
    ataqueJugador = "Tierra"
    // ataquePlayer.innerHTML =  "Tierra"
    ataqueAleatorioEnemigo()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min  + 1) + min)
}

function ataqueAleatorioEnemigo(){
    let ataqueRandom = aleatorio(1, 3)
    // let ataque = document.getElementById("ataque-enemigo")

    if (ataqueRandom == 1){
        // ataque.innerHTML = "Fuego"
        ataqueEnemigo = "Fuego"
    }
    else if (ataqueRandom == 2){
        // ataque.innerHTML = "Agua" 
        ataqueEnemigo = "Agua"  
    }
    else{
        // ataque.innerHTML = "Tierra"
        ataqueEnemigo = "Tierra"
    }
    batalla()
}

function batalla(){
    if (ataqueJugador == ataqueEnemigo){
        battle = "empate!!"
    } else if(  ataqueJugador == "Agua" && ataqueEnemigo == "Fuego" || ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra" ||            ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        battle = "GANASTE!!"
        vidasEnemigo = vidasEnemigo - aleatorio(2, 4)
        spanVidaEnemigo.innerHTML = vidasEnemigo
     } 
    // else if (vidasEnemigo == 0 || vidasJugador == 0){
    //     finalizarCombate()
    //  }
      else {
        battle = "PERDISTE!! :("
        vidasJugador = vidasJugador - aleatorio(2, 4)
        spanVidaJugador.innerHTML = vidasJugador
    } 
    crearMensaje()
    finalizarCombate()
}

function finalizarCombate(){
    let sectionReiniciar = document.getElementById("reiniciar")
    if(vidasEnemigo <= 0){
    alert("GANASTE LA PARTIDA!!")
    crearMensajeFinal("FELICIDADES! Has ganado la partida :)")
    sectionReiniciar.style.display = "block" 
    }   else if (vidasJugador <= 0){
    alert("PERDISTE LA PARTIDA :(")
    crearMensajeFinal("No te rindas y vuelve a intentarlo, campeon")
    sectionReiniciar.style.display = "block" 
    } 
console.log(crearMensajeFinal)
}

function crearMensajeFinal(resultadoFinal){
    let sectionmensajes = document.getElementById("mensajes")
    let parrafo = document.createElement('p')

    parrafo.innerHTML = resultadoFinal

    sectionmensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
}
function crearMensaje(){
    let sectionmensajes = document.getElementById("mensajes")
    let parrafo = document.createElement('p')

    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + "<br /> la mascota del enemigo atacó con " + ataqueEnemigo + " " + battle + "<hr />"

    sectionmensajes.appendChild(parrafo)
}

function reiniciarPartida(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)
// Se agrega al objeto "window" el metodo "load" para que cuando cargue la pagina se ejecuten el codigo js con las variables del document

// createElement crea nuevos elementos en html. innerHTML los modifica 

// operators
// and == &&
// or == ||
// not == !
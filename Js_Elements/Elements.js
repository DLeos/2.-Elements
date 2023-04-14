const sectionSelecionarElemento = document.getElementById ("selecion-elemento")
const inputAnimax = document.getElementById("animax")
const inputValtrik = document.getElementById("valtrik")
const inputDarlog = document.getElementById("darlog")
const inputKinlee = document.getElementById("kinlee")
const sectionSelecionarPersonaje = document.getElementById ("selecion-personaje")
const spanPersonajeSelecionado = document.getElementById("nombrepersonaje")
const spanPersonajeRivalSelecionado = document.getElementById("nombrepersonajerival")
const sectionReinicarJuego = document.getElementById ("sectionReinicar")
const botonPersonaje = document.getElementById("boton_Personaje")
let botonElementoFuego = document.getElementById("boton_Elemento_Fuego")
const botonElementoAgua = document.getElementById("boton_Elemento_Agua")
const botonElementoTierra = document.getElementById("boton_Elemento_Tierra")
const botonElementoViento = document.getElementById("boton_Elemento_Viento")
const spanQVida = document.getElementById("qvida")
const spanQVidaRival = document.getElementById("qvidarival")
const botonReiniciarJuego = document.getElementById ("reiniar-juego")

let personajesElements = []
let ataquePersonaje
let ataqueRival
let vidaJugador = 10
let vidaRival = 10

class PersonajeElements{
    constructor(nombre, foto, salud) {
        this.nombre = nombre
        this.foto = foto
        this.salud = salud
        this.elementoBase = []
        this.ataques = []
    }
}

let animax = new PersonajeElements ("Animax", "./Imagenes/Animax.jpg", 10)
let valtrik = new PersonajeElements ("Valtrik", "./Imagenes/Valtrick.jpg", 10)
let darlog = new PersonajeElements ("Darlog", "./Imagenes/Darlog.jpg", 10)
let kinlee = new PersonajeElements ("Kinlee", "./Imagenes/Kinlee.jpg", 10)


personajesElements.push(animax, valtrik, darlog, kinlee)

animax.elementoBase.push("Viento")
valtrik.elementoBase.push("Tierra")
darlog.elementoBase.push("Fuego")
kinlee.elementoBase.push("Agua")

animax.ataques.push(
    { nombreataque: "🌬", id: "boton_Elemento_Viento"},
    { nombreataque: "🌬", id: "boton_Elemento_Viento"},
    { nombreataque: "🌬", id: "boton_Elemento_Viento"},
    { nombreataque: "⛰", id: "boton_Elemento_Tierra"},
    { nombreataque: "💧", id: "boton_Elemento_Agua"},
    { nombreataque: "🔥", id: "boton_Elemento_Fuego"}
)
valtrik.ataques.push(
    { nombreataque: "⛰", id: "boton_Elemento_Tierra"},
    { nombreataque: "⛰", id: "boton_Elemento_Tierra"},
    { nombreataque: "⛰", id: "boton_Elemento_Tierra"},
    { nombreataque: "💧", id: "boton_Elemento_Agua"},
    { nombreataque: "🔥", id: "boton_Elemento_Fuego"},
    { nombreataque: "🌬", id: "boton_Elemento_Viento"}
)
darlog.ataques.push(
    { nombreataque: "🔥", id: "boton_Elemento_Fuego"},
    { nombreataque: "🔥", id: "boton_Elemento_Fuego"},
    { nombreataque: "🔥", id: "boton_Elemento_Fuego"},
    { nombreataque: "💧", id: "boton_Elemento_Agua"},
    { nombreataque: "🌬", id: "boton_Elemento_Viento"},
    { nombreataque: "⛰", id: "boton_Elemento_Tierra"}
)
kinlee.ataques.push(
    { nombreataque: "💧", id: "boton_Elemento_Agua"},
    { nombreataque: "💧", id: "boton_Elemento_Agua"},
    { nombreataque: "💧", id: "boton_Elemento_Agua"},
    { nombreataque: "🌬", id: "boton_Elemento_Viento"},
    { nombreataque: "⛰", id: "boton_Elemento_Tierra"},
    { nombreataque: "🔥", id: "boton_Elemento_Fuego"}
)

function iniciarJuego (){
    sectionSelecionarElemento.style.display = "none"
    sectionReinicarJuego.style.display = "none"
    botonPersonaje.addEventListener("click",selecionarPersonaje)        
    botonElementoFuego.addEventListener("click" , ataqueFuego)  
    botonElementoAgua.addEventListener("click" , ataqueAgua)    
    botonElementoTierra.addEventListener("click" , ataqueTierra)    
    botonElementoViento.addEventListener("click" , ataqueViento)    
    botonReiniciarJuego.addEventListener("click" , reiniciarJuego)
    actualizarVida()
}
function aleatroio (min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min)
}    
function selecionarPersonaje (){
    sectionSelecionarElemento.style.display = "block"
    sectionSelecionarPersonaje.style.display = "none"
    if (inputAnimax.checked){
        spanPersonajeSelecionado.innerHTML = "Animax"
    } else if (inputValtrik.checked){
        spanPersonajeSelecionado.innerHTML = "Valtrik"
    }else if (inputDarlog.checked){
        spanPersonajeSelecionado.innerHTML = "Darlog"
    }else if (inputKinlee.checked){
        spanPersonajeSelecionado.innerHTML = "Kinlee"
    } else {
        alert ("No selecionaste a ningun jugador")
    }
    selecionarPersonajeEnemigo ()
}
function selecionarPersonajeEnemigo (){
    let rival = aleatroio(1,4)
    if (rival == 1){
        spanPersonajeRivalSelecionado.innerHTML = "Animax"
    } else if (rival == 2){
        spanPersonajeRivalSelecionado.innerHTML = "Valtrik"
    }else if (rival == 3){
        spanPersonajeRivalSelecionado.innerHTML = "Darlog"
    }else if (rival == 4){
        spanPersonajeRivalSelecionado.innerHTML = "Kinlee"
    }
}
// Ataques personaje
function ataqueFuego(){
    ataquePersonaje ="Fuego"
    ataquealeatorioRival()
}
function ataqueAgua(){
    ataquePersonaje ="Agua"
    ataquealeatorioRival()
}
function ataqueTierra(){
    ataquePersonaje ="Tierra"
    ataquealeatorioRival()
}
function ataqueViento(){
    ataquePersonaje ="Viento"
    ataquealeatorioRival()
}
// Ataques Enemigo
function ataquealeatorioRival (){
    let resultadoAtaqueRival = aleatroio(1,4)
        if (resultadoAtaqueRival == 1){
            ataqueRival = "Fuego"
        } else if (resultadoAtaqueRival == 2){
            ataqueRival = "Agua"
        }else if (resultadoAtaqueRival == 3){
            ataqueRival = "Tierra"
        }else if (resultadoAtaqueRival == 4){
            ataqueRival = "Viento"
        }
    combate()
}
// VS
function actualizarVida (){
    spanQVida.innerHTML = vidaJugador
    spanQVidaRival.innerHTML = vidaRival
}
function combate() {            
    if (ataquePersonaje == ataqueRival){
    } else if (ataquePersonaje == "Fuego" && ataqueRival == "Viento"){
            vidaRival = vidaRival - 3
    } else if (ataquePersonaje == "Viento" && ataqueRival == "Tierra"){
            vidaRival = vidaRival - 3
    } else if (ataquePersonaje == "Tierra" && ataqueRival == "Agua"){
            vidaRival = vidaRival - 3
    } else if (ataquePersonaje == "Agua" && ataqueRival == "Fuego"){
            vidaRival = vidaRival - 3
    } else if (ataqueRival == "Fuego" && ataquePersonaje == "Viento"){
            vidaJugador = vidaJugador - 3
    } else if (ataqueRival == "Viento" && ataquePersonaje == "Tierra"){
            vidaJugador = vidaJugador - 3
    } else if (ataqueRival == "Tierra" && ataquePersonaje == "Agua"){
            vidaJugador = vidaJugador - 3
    } else if (ataqueRival == "Agua" && ataquePersonaje == "Fuego"){
            vidaJugador = vidaJugador - 3
    } else {
            vidaJugador = vidaJugador - 1
            vidaRival = vidaRival - 1                 
    }
    actualizarVida()
    crearMensaje()
    if (vidaJugador <= 0) {
       crearMensajefinal("Fin del juego ☠ Perdiste ☠")
    } else if (vidaRival <= 0){
        crearMensajefinal("Fin del juego 🎉 Ganaste 🎉")
    }
}
// Detalle VS
function crearMensaje(){
    let sectionMensajes = document.getElementById("Mensajes")
    let parrafoDetalleVS = document.createElement("p")
    parrafoDetalleVS.innerHTML = "Tu personaje ataco con " + ataquePersonaje +" y tu enermigo ataco con " + ataqueRival
    sectionMensajes.appendChild(parrafoDetalleVS)
}
function crearMensajefinal(resultadoFinalCombate){
    let sectionReinicarJuego = document.getElementById ("sectionReinicar")
    sectionReinicarJuego.style.display = "block"
    let sectionMensajeFinal = document.getElementById("MensajeFinal")
    let parrafoDetalleVSFinal = document.createElement("p")
    parrafoDetalleVSFinal.innerHTML = resultadoFinalCombate
    sectionMensajeFinal.appendChild(parrafoDetalleVSFinal)
    botonElementoFuego.disabled = true
    botonElementoAgua.disabled = true
    botonElementoTierra.disabled = true
    botonElementoViento.disabled = true
}
function reiniciarJuego () {
    location.reload ()
}
window.addEventListener("load", iniciarJuego)
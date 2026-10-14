import { obtenerPaises } from "./api/countriesApi"

console.log ("conexion exitosa")

// IMPORT SUELE ESTAR HASTA ARRIBA 
//impoort {obtenerPaises} from "./api/countriesApi.js.js"

//REFERENCIAS DEL DOM
const destinationContainer = document.querySelector('#destinations-container')
const resultCount= document.querySelector('#results-count')

//INICIALIZACIÓN DE LA APP
function init(){
    console.log('Explorador de viakes iniciado')
    resultCount.textContent = '1 destino'

}

// INICIAR APP
init()

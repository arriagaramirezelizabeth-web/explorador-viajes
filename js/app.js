console.log ("conexion exitosa")

//REFERENCIAS DEL DOM
const destinationContainer = document.querySelector('#destinations-container')
const resultCount= document.querySelector('#results-count')

//INICIALIZACIÓN DE LA APP
function init(){
    console.log('Explorador de viakes iniciado')
    resultCount.textContent = '1 destino'

}

//
init()

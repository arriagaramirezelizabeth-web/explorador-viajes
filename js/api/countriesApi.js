// Crear comunicación con la api paises
/*
//1 obtener URL de la api
const API_URL = 'https://juancognitus.github.io/explorador-viajes-api/paises.json'

//2. expor me permite exportar mi funcion  lo que he manejado a otros archivos
export async function obtenerPaises(){
    //Realizar la petición a la api
    const response = await fetch(API_URL)
// si conozco las posibilidades de repsuesta puedo limitarlas
   try{
        if (response.ok){
            throw new Error('Error HTT: ${response.status}')
        }
        
        const result = await response.json()
        const paises = result
        return paises
    }
}

*/
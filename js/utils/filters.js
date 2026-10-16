// v0.4.0 FILTROS Y ORDENAMIENTO
// Funciones para procesardestinos

// FUNCION BUSCAR PAÍSES POR NOMBRE
export function buscarPaises(paises, texto) {
  // NORMALIZAR TEXTO DE BUSQUEDA
  const textoNormalizado = texto.trim().toLowerCase(); //Normalizamos el texto de búsqueda eliminando espacios y convirtiendo a minúsculas
                        // texto recibido, texto.trim() elimina espacios en blanco al inicio y al final, y toLowerCase() convierte el texto a minúsculas para hacer la búsqueda insensible a mayúsculas y minúsculas.
  
 // RETORNAR TODOS LOS PAISES SIN BUSQUEDA
 //Validación si no hay busqueda, "si no encuentras regresa todo a como estaba"
  if (!textoNormalizado) {
    return paises;
  }

  // FILTRAR PAÍSES
  return paises.filter((pais) => {
    //normalizar el nombre del país, pero que no mande error si no existe el nombre, 
    // por eso usamos el operador de encadenamiento opcional (?.) y el operador de fusión nula (??)         
    // para asignar una cadena vacía en caso de que no exista el nombre del país.
    const nombre = pais.names?.common?.toLowerCase() ?? ''; 
    //"Si en el nombre esta el texto normalizado "
    return nombre.includes(textoNormalizado);
  });
}

// FILTRAR POR CONTINENTE
//Hago el export para poderla usar en otras partes del proyecto
//el continente se optiene de selection.value, y el paises es el array de paises que se obtiene de la API
export function filtrarPorContinente(paises, continente) {
  // RETORNAR LOSPAISES CON FILTER
  // Si el continente es "all", retornamos todos los países sin filtrar
  if (continente === 'all') {
    return paises;
  }

  // FILTRAMOS POR REGION
  // Usamos el método filter() para crear un nuevo array con los países que cumplen la condición de tener la
  // región igual al continente seleccionado
  return paises.filter((pais) => pais.region === continente);
}

// ORDENAR PAÍSES
export function ordenarPaises(paises, criterio) {
  // CREAR UNA COPIA
  //se usa spread operator para crear una copia del array de paises, para no modificar el array original
  const paisesOrdenados = [...paises];

  // ORDENAR A-Z CON localeCompare()
  if (criterio === 'az') {
    // Usamos el método sort() para ordenar el array en orden alfabético
    return paisesOrdenados.sort((a, b) => {
        //common es directamente de mi objeto no es función de JS 
        //a y b 
      const nombreA = a.names?.common ?? '';
      const nombreB = b.names?.common ?? '';
        //localeCompare() compara dos cadenas de texto y
        //devuelve un número que indica si la primera cadena es menor, igual o mayor que la segunda cadena
      return nombreA.localeCompare(nombreB);
    });
  }

  // ORDENAR Z-A
  if (criterio === 'za') {
    return paisesOrdenados.sort((a, b) => {
      const nombreA = a.names?.common ?? '';
      const nombreB = b.names?.common ?? '';

      return nombreB.localeCompare(nombreA);
    });
  }
  //retono solo el array con las condiciones de busqueda, filtrado y ordenamiento aplicadas
  return paisesOrdenados;
}

// PROCESAR PAÍSES, esto permite aplicar los filtros y ordenamiento en un solo paso, 
// llamando a las funciones anteriores
export function procesarPaises(paises, texto, continente, criterioOrden) {
    //utlizo let porque esta avriable ira cambiando segun el pais que pidan 
    //mando a llamar la funcion buscar paises 
  let resultado = buscarPaises(paises, texto);

  resultado = filtrarPorContinente(resultado, continente);

  resultado = ordenarPaises(resultado, criterioOrden);

  return resultado;
}
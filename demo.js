

export const suma = (a,b ) => {

  if(typeof a != "number" || typeof b != "number"){
    return 'error: los valores recibidos no son numeros'
  }


  return a + b
}
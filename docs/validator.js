const validator = {
  // ...
  isValid(creditCardNumber) {
    let validador = false //variable validadora
    //si esta vacio es incorrecto
    //algoritmo de Luhn
    //paso1 inversion
    const arregloInvertido = [...creditCardNumber].reverse()
    // console.log(arregloInvertido) //arreglo con string
    const arregloInvertidoNumero = []
    for (const elemento of arregloInvertido) {
      arregloInvertidoNumero.push(Number(elemento))
    }
    //console.log(arregloInvertidoNumero)
    //paso2 buscamos los de POSICION PAR y los multiplicamos x2
    for (let i = 0; i < arregloInvertidoNumero.length; i++) {
      if ((i + 1) % 2 === 0) {
        arregloInvertidoNumero[i] = arregloInvertidoNumero[i] * 2
        //paso3 suma de digitos si son mayores iguales que 10
        if (arregloInvertidoNumero[i] >= 10) {//10,12,14,16,18
          const numeroCadena = arregloInvertidoNumero[i].toString() //"16"
          arregloInvertidoNumero[i] = Number(numeroCadena[0]) + Number(numeroCadena[1])
        }
      }
    }
    //console.log(arregloInvertidoNumero)
    // paso4: sumar todas los elementos del arreglo y verificar que sea multiplo de 10
    let acumulador = 0
    for (const element of arregloInvertidoNumero) {
      acumulador = acumulador + element
    }
    //console.log(acumulador)
    if (acumulador % 10 === 0) {
      validador = true // es valido si es multiplo de 10
    }
    return validador
  },
  maskify(creditCardNumber) {
    //guardamos aqui la cadena modificada
    let resultado = ""
    //recorremos toda la cadena original
    for (let i = 0; i < creditCardNumber.length; i++) {
      //solo cambiamos las letras a michi si la posicion es menor la cantidad de caracteres menos 4
      if (i < creditCardNumber.length - 4) {
        resultado = resultado + '#' //consideramos el michi si es antes de los 4 caracteres finales
      } else {
        resultado = resultado + creditCardNumber[i] //consideramos los 4 caracteres finales iguales
      }
    }
    return resultado
  },
};
export default validator;

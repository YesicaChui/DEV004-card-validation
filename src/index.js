import validator from './validator.js';

function validar() {
  const divResult = document.getElementById("resultado")
  const valid = validator.isValid(document.getElementById("numeroTarjeta").value)
  if (valid) {
    divResult.innerHTML = `<p>Tarjeta valida</p>
      <p>Compra Exitosa</p>`
  }
  else {
    divResult.innerHTML = `<p>La Tarjeta es Invalida</p>`
  }
}
const botonFinalizar = document.getElementById("botonFinalizar")
botonFinalizar.addEventListener("click", validar)
//console.log(validator.maskify("8"))
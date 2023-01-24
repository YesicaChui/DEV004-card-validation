import validator from './validator.js';

function validar() {
  const divResult = document.getElementById("resultado")
  const miInput = document.getElementById("numeroTarjeta")
  const valid = validator.isValid(miInput.value)
  if (valid) {
    divResult.innerHTML = `<p>Tarjeta valida</p>
      <p>Compra Exitosa</p>
      <p>${validator.maskify(miInput.value)}</p>
      `
    divResult.style.color="green"
  }
  else {
    divResult.innerHTML = `<p>La Tarjeta es Invalida</p>`
    divResult.style.color="red"
  }
}
const botonFinalizar = document.getElementById("botonFinalizar")
botonFinalizar.addEventListener("click", validar)
//console.log(validator.maskify("8"))
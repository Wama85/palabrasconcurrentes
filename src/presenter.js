import ocurrencia from "./palabras";

const txtpalabra = document.querySelector("#txtpalabra");
const btncontar = document.querySelector("#btncontar");
const div = document.querySelector("#resultado-div");

btncontar.addEventListener("click", (event) => {
  event.preventDefault();
  const oracion = txtpalabra.value;
  const resultaobjetos=ocurrencia(oracion);
  let resultadopalabras=""
  for(const palabras in resultaobjetos){
  resultadopalabras +=`${palabras}:${resultaobjetos[palabras]} `
  }
  
  div.innerHTML = "<p> " + resultadopalabras + " </p>";
});

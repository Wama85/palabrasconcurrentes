import montoPagar from "./cacularpagos";

const txtPago = document.querySelector("#txtPago");
const txtHoras=document.querySelector("#txtHoras");
const btncalcular = document.querySelector("#btncalcular");
const div = document.querySelector("#resultado-div");

btncalcular.addEventListener("click", (event) => {
  event.preventDefault();
  const monto = parseInt(txtPago.value);
  const horas =parseInt(txtHoras.value);
  const resultado=montoPagar(monto,horas);
  if(resultado == undefined){
    alert("Debe ingresar los datos")
  }
 
else{
  div.innerHTML = `
  <table>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Mes</th>
                <th>Horas</th>
                <th>Monto</th>
                <th>Total</th>
               </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Wilner</td>
                    <td>Mena</td>
                    <td>Diciembre</td>
                    <td>${horas}</td>
                    <td>${monto}</td>
                    <td>${resultado}</td>

                </tr>
            </tbody>
        </table>
  `
  alert("Datos ingresados correctamente")
}
});
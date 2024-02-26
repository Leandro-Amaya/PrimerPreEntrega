const promedioFinal = document.querySelector("#promedio-final")
const buscar = document.querySelector("#buscar")
const respuesta = document.querySelector("#respuesta")
let notafinal = " "
 promedioFinal.addEventListener("input", (event) =>
 notafinal = event.target.value
 )
buscar.addEventListener("click", () => {
  const notaIngresada = parseFloat(notafinal);
  fetch('https://my-json-server.typicode.com/Leandro-Amaya/APIescuelas/escuelas')
    .then((response) => response.json())
    .then((escuelas) => {
      const escuelasAccesibles = escuelas.filter(escuela => {
          if (Array.isArray(escuela.notasNecesarias)) {
            return notaIngresada >= Math.min(...escuela.notasNecesarias) && notaIngresada <= Math.max(...escuela.notasNecesarias);
          } else {
            return notaIngresada >= escuela.notasNecesarias;
          }
      });
      if (escuelasAccesibles.length > 0) {
        respuesta.innerHTML = "<h2>Escuelas a las que puedes acceder:</h2>";
        escuelasAccesibles.forEach(escuela => {
          respuesta.innerHTML += `
          <div id="acceder-esc">
           <h3>${escuela.nombre}</h3>
           <ul>
             <li>Dirección: ${escuela.direccion}</li>
             <li>Teléfono: ${escuela.telefono}</li>
             <li>Mail: ${escuela.mail}</li>
           </ul>
          </div> `;
        });
      } else {
         respuesta.innerHTML = "<h2>No hay escuelas disponibles para tu nota.</h2>";
        }
    })
    .catch(error => {
      console.error('Error al obtener datos de las escuelas:', error);
      respuesta.innerHTML = "<p>Error al cargar las escuelas. Por favor, intenta nuevamente más tarde.</p>";
    });
});


 
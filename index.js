let storedHistorial = [];
function promedioAlumn(...notas) {
    return notas.reduce((prev, nota) => prev + nota, 0) / notas.length;
}
const nombre = document.querySelector("#nombre") 
const contenedor= document.querySelector("#hDos")
let nombreAlumno = " "
nombre.addEventListener("input", (event)=>
nombreAlumno = event.target.value)
const primerNota = document.querySelector("#priNota")
const segundaNota = document.querySelector("#secNota")
const tercerNota = document.querySelector("#terNota")
const boton = document.querySelector("#iniciar")
let priParcial = 0;
let secParcial = 0;
let terParcial = 0;
let alumnos= {
    nombre: " ",
    notaTotal: 0
}
primerNota.addEventListener("input", (event) => {
    priParcial = parseInt(event.target.value) || 0;
});
segundaNota.addEventListener("input", (event) => {
    secParcial = parseInt(event.target.value) || 0;
});
tercerNota.addEventListener("input", (event) => {
    terParcial = parseInt(event.target.value) || 0;
});
boton.addEventListener("click", () => {
    let sumaDeParciales = promedioAlumn(priParcial, secParcial, terParcial);
    const promedio = Math.round(sumaDeParciales);
    alumnos ={
       nombre: nombreAlumno,
       notaTotal: promedio
    } 
    contenedor.innerHTML =`<h2>${nombreAlumno} Tu promedio es de un ${promedio}</h2>` 
    storedHistorial = JSON.parse(localStorage.getItem("historialAlumnos")) || [];
    storedHistorial.push(alumnos);
    localStorage.setItem("historialAlumnos", JSON.stringify(storedHistorial));
});
const botonHistorial= document.querySelector("#boton-historial")
const verHistorial = document.querySelector("#historial")
botonHistorial.addEventListener("click", () => {
    verHistorial.innerHTML = "";
    storedHistorial.sort((a,b)=>{
        if(a.nombre > b.nombre){
           return 1;
       } if(a.nombre<b.nombre){
          return -1;
        }return 0
       })
    storedHistorial.forEach((alumno)=>{
        verHistorial.innerHTML += `<p>${alumno.nombre} tu nota final es ${alumno.notaTotal}</p>`
    })
})

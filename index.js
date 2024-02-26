let storedHistorial = [];
function promedioAlumn(notas) {
    return notas.reduce((prev, nota) => prev + nota, 0) / notas.length;
}
const nombre = document.querySelector("#nombre") 
const contenedor= document.querySelector("#contenedor-h-dos")
let nombreAlumno = " "
const notasInputs = [
    document.querySelector("#priNota"),
    document.querySelector("#secNota"),
    document.querySelector("#terNota")
];
const botonIniciar = document.querySelector("#iniciar")
const botonHistorial= document.querySelector("#boton-historial")
const verHistorial = document.querySelector("#historial")
const borrarHistorial = document.querySelector("#borrar-historial")
let alumnos= {
    nombre: " ",
    notas: [null,null,null],
    notaTotal: 0
}
nombre.addEventListener("input", (event)=> 
nombreAlumno = event.target.value)

notasInputs.forEach((notaInput, calificacion) => {
    notaInput.addEventListener("input", (event) => {
         const nota = parseInt(event.target.value);
        if ( !isNaN(nota) && nota >= 0 && nota <= 10 ) {
            alumnos.notas[calificacion] = nota;
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ingrese una nota válida entre 0 y 10",
              }).then(() => {
                event.target.value = '';
            });
        }
    });
})  


botonIniciar.addEventListener("click", () => {
    if (nombreAlumno.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, ingrese un nombre válido.",
        });
        return;
    }
    let sumaDeParciales = promedioAlumn(alumnos.notas);
    const promedio = Math.round(sumaDeParciales);
    alumnos ={
       nombre: nombreAlumno,
       notas:alumnos.notas,
       notaTotal: promedio
    } 
    contenedor.innerHTML =`<h2>${nombreAlumno} Tu promedio es de un ${promedio}</h2>` 
    
    const guardarEnLocalStorage = () => {
        storedHistorial = JSON.parse(localStorage.getItem("historialAlumnos")) || [];
        storedHistorial.push(alumnos);
        localStorage.setItem("historialAlumnos", JSON.stringify(storedHistorial));
    };
    guardarEnLocalStorage()
});


botonHistorial.addEventListener("click", () => {
    verHistorial.innerHTML = " ";
    storedHistorial.sort((a,b)=>{
        if(a.nombre > b.nombre){
           return 1;
       } if(a.nombre<b.nombre){
          return -1;
        }return 0
       })
    verHistorial.innerHTML = `<h2>Historial de alumnos</h2>`;
    storedHistorial.forEach((alumno)=>{
        verHistorial.innerHTML += `
        <div id="alumno-boton">
            <p>${alumno.nombre} tu nota final es ${alumno.notaTotal}</p>
            <button class="boton-x">X</button>
        </div>`;
    })
    const botonesX =document.querySelectorAll(".boton-x")
    botonesX.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            storedHistorial.splice(index, 1);
            localStorage.setItem("historialAlumnos", JSON.stringify(storedHistorial));
            botonHistorial.click(); 
        });    
    });
})
borrarHistorial.addEventListener("click",() =>{
    localStorage.clear()
    verHistorial.innerHTML = " ";
    storedHistorial = [];
} )

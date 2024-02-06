let storedHistorial = [];
function promedioAlumn(notas) {
    return notas.reduce((prev, nota) => prev + nota, 0) / notas.length;
}
const nombre = document.querySelector("#nombre") 
const contenedor= document.querySelector("#hDos")
let nombreAlumno = " "
const notasInputs = [
    document.querySelector("#priNota"),
    document.querySelector("#secNota"),
    document.querySelector("#terNota")
];
const boton = document.querySelector("#iniciar")
const botonHistorial= document.querySelector("#boton-historial")
const verHistorial = document.querySelector("#historial")
let alumnos= {
    nombre: " ",
    notas: [],
    notaTotal: 0
}
nombre.addEventListener("input", (event)=> 
nombreAlumno = event.target.value)

notasInputs.forEach((notaInput, calificacion) => {
    notaInput.addEventListener("input", (event) => {
        const nota = parseInt(event.target.value) || 0;
        if (nota >= 0 && nota <= 10) {
            alumnos.notas[calificacion] = nota;
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ingrese una nota válida entre 0 y 10",
              });
        }
    });
})  


boton.addEventListener("click", () => {
    let sumaDeParciales = promedioAlumn(alumnos.notas);
    const promedio = Math.round(sumaDeParciales);
    alumnos ={
       nombre: nombreAlumno,
       notas:alumnos.notas,
       notaTotal: promedio
    } 
    contenedor.innerHTML =`<h2>${nombreAlumno} Tu promedio es de un ${promedio}</h2>` 
    
    const guardarEnLocalStorage = () => {
        return new Promise((resolve, reject) => {
            try {
                storedHistorial = JSON.parse(localStorage.getItem("historialAlumnos")) || [];
                storedHistorial.push(alumnos);
                localStorage.setItem("historialAlumnos", JSON.stringify(storedHistorial));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    guardarEnLocalStorage()
});


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

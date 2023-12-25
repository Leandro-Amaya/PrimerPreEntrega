const historialAlumnos = [];
function notaParcial(mensaje) {
    let nota;
    do {
        nota = parseInt(prompt(mensaje));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}
function promedioAlumn(...notas) {
    return notas.reduce((prev, nota) => prev + nota, 0) / notas.length;
}
let continuar = true
while(continuar){
    const saludo = prompt("¡Bienvenido a Coder House!, ingrese su nombre")
    let opcion = prompt("hola"+" "+saludo+" ¿quieres saber el promedio de tus examenes y asi saber que nota deberias sacar en tu examen final? \n si/no")
    if(opcion.toLowerCase() ==="si"){
        let priParcial = notaParcial("Ingrese la nota que obtuvo en el primer parcial");
        let secParcial = notaParcial("Ingrese la nota que obtuvo en el segundo parcial");
        let terParcial = notaParcial("Ingrese la nota que obtuvo en el tercer parcial");
        alert("Estas son tus notas ingresadas"+", "+priParcial+", "+secParcial+", "+terParcial+",\n se sumaran las 3 y despues se dividiran, en caso de que el decimal de 0,5 o mas se subira la nota")
        let sumaDeParciales = promedioAlumn(priParcial,secParcial,terParcial)
        const promedio = Math.round(sumaDeParciales)
        const alumnos ={
             nombre: saludo,
             notaTotal: sumaDeParciales
        }
        historialAlumnos.push(alumnos);
        switch(promedio){
            case 1:
            case 2: 
            case 3:
                alert("No te alcanza la nota para aprobar la materia")
                break
            case 4:
                alert("Necesitas un 10 en tu examen final para aprobar la materia")
                break
            case 5:
                alert("Necesitas un 9 en tu examen final para aprobar la materia")
                break
            case 6:
                alert("Necesitas un 8 en tu examen final para aprobar la materia")
                break
            case 7:
                alert("Necesitas un 7 en tu examen final para aprobar la materia")
                break
            case 8:
                alert("Necesitas un 6 en tu examen final para aprobar la materia")
                break  
            case 9:
                alert("Necesitas un 5 en tu examen final para aprobar la materia")
                break 
            case 10:
                alert("Necesitas un 4 en tu examen final para aprobar la materia")
                break 
            default:
                alert("calculo incorrecto, revisa que los numeros ingresados de tus examenes sean correctos") 
                break         
        }
    }else if  (opcion.toLowerCase() === "no") {
        alert("Muchas gracias hasta luego"+" "+saludo+"!!");
        break;
    }else {
        alert("Opción no válida. Por favor, ingresa 'Si' o 'No'.");
    }
}
historialAlumnos.forEach((alumno)=>{
    console.log(alumno.nombre+" "+"tu nota final de los parciales es"+" "+ alumno.notaTotal);
})
historialAlumnos.sort((a,b)=>{
 if(a.nombre > b.nombre){
    return 1;
} if(a.nombre<b.nombre){
   return -1;
 }return 0
})
console.log(historialAlumnos);



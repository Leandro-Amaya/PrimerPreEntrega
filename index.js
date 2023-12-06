const saludo = prompt("¡Bienvenido a Coder House!, ingrese su nombre")
alert("hola"+" "+saludo+" ¿quieres saber el promedio de tus examenes y asi saber que nota deberias sacar en tu examen final?")
let priParcial, secParcial, terParcial;
do {
    priParcial = parseInt(prompt("Ingrese la nota que obtuvo en el primer parcial"));
} while (priParcial < 0 || priParcial > 10);
do {
    secParcial = parseInt(prompt("Ingrese la nota que obtuvo en el segundo parcial"));
} while (secParcial < 0 || secParcial > 10);
do {
    terParcial = parseInt(prompt("Ingrese la nota que obtuvo en el tercer parcial"));
} while (terParcial < 0 || terParcial > 10);
alert("Estas son tus notas ingresadas"+", "+priParcial+", "+secParcial+", "+terParcial+", se sumaran las 3 y despues se dividiran, en caso de que el decimal de 0,5 o mas se subira la nota")
const sumaDeParciales =((priParcial + secParcial + terParcial) /3) 
function decimalesFun(sumaDeParciales) {
 let decimal= sumaDeParciales % 1
    if (decimal >= 0.5) {
    return Math.ceil(sumaDeParciales)
 } else {
      return Math.floor(sumaDeParciales)
    }
} 
const resultadoDecimal = decimalesFun(sumaDeParciales)
switch(resultadoDecimal){
    case 1:
        console.log("No te alcanza la nota para aprobar la materia")
        break
    case 2: 
        console.log("No te alcanza la nota para aprobar la materia")
        break
    case 3:
        console.log("No te alcanza la nota para aprobar la materia")
        break
    case 4:
        console.log("Necesitas un 10 en tu examen final para aprobar la materia")
        break
    case 5:
        console.log("Necesitas un 9 en tu examen final para aprobar la materia")
        break
    case 6:
        console.log("Necesitas un 8 en tu examen final para aprobar la materia")
        break
    case 7:
        console.log("Necesitas un 7 en tu examen final para aprobar la materia")
        break
    case 8:
        console.log("Necesitas un 6 en tu examen final para aprobar la materia")
        break  
    case 9:
        console.log("Necesitas un 5 en tu examen final para aprobar la materia")
        break 
    case 10:
        console.log("Necesitas un 4 en tu examen final para aprobar la materia")
        break 
    default:
        console.log("calculo incorrecto, revisa que los numeros ingresados de tus examenes sean correctos") 
        break         
}
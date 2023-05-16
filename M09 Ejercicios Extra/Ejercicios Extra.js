/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array=[]
   var clave= Object.keys(objeto)
   var valor= Object.values(objeto)
   for (var i=0;i<clave.length;i++){
    array.push([clave[i],valor[i]])
   } return array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
var palabra= string.split('').sort().join('')

var objeto={}
for(var i=0 ; i < palabra.length; i++){
    var letra=palabra[i]
   if(letra in objeto){
      objeto[letra]++
   }else{
      objeto[letra] = 1
   }
   }
   return objeto
   }


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayMayus=[]
   var arrayMinus=[]
   var mayusculas=''
   var minusculas=''
   var letra=string.split('')
   for(var i = 0; i < string.length;i++){
        if(letra[i]===letra[i].toUpperCase()){
      arrayMayus.push( letra[i])
   }else{
      arrayMinus.push(letra[i])
   }
   }
   var array=arrayMayus.concat(arrayMinus)
   var palabraFinal=array.join('')
   return palabraFinal
}
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var array=[]
   var palabras=frase.split(' ')
   for (var i=0; i < palabras.length; i++){
    var letras=palabras[i]
    var letrasReverse=letras.split('').reverse().join('')
   array.push(letrasReverse)
   }
  var fraseReversa= array.join(' ')
  return fraseReversa
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString()
   var numeroReverso = numeroString.split('').reverse().join('')
   if (numeroString === numeroReverso){
      return "Es capicua"
   }else{
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
        var array=string.split('')
        var array2=[]
        for (var i=0;i<array.length;i++){
            if (array[i] !== 'a' && array[i] !== 'b' && array[i] !== 'c'){
                array2.push(array[i])
            }
        }
       
        var palabra=array2.join('')
        return palabra
    }



function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código: 
var ordenadas=arrayOfStrings.sort((a, b)=>a.length - b.length)

return ordenadas

 
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var result=[]
   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i]) && !result.includes(array1[i])) {
        result.push(array1[i]);
      }
    }
    return result;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

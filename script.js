 
 //Funcion que agrega en pantalla cualquier boton que se toque 
 function agregar(valor){
    document.getElementById('pantalla').value += valor
 }

 //Accion limpia la pantalla
 function borrar(valor){
    document.getElementById('pantalla').value = ''
 }


 //Accion Captura, calcula he imprime el valir de pantalla
 function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado  = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
 }
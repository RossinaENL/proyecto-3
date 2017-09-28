
/*Función de ordenar, se modificará para que ordene por No siniiga y por raza*/
function sort() {
  var inputs = document.getElementsByClassName( 'control' );
  var names  = [].map.call(inputs, function( input ) {
    return input.value;
  });
  var inp = document.getElementsByName('radioTask1');
    for (var i = 0; i < inp.length; i++) {
      if (inp[i].checked && inp[i].id == "NmbA") {
        names.sort(function(a, b){return a-b});
        	
      } else if (inp[i].checked && inp[i].id == "NmbD") {
        names.sort(function(a, b){return b-a});
       
      } else if (inp[i].checked && inp[i].id == "AlbA") {
        names.sort();
          
      } else if (inp[i].checked && inp[i].id == "AlbD") {
        names.sort();
        names.reverse();
      }
         
  }
    

   
   document.getElementById("resultTask1").innerHTML = "Sort: " + names;
 
    
    
};
/*
//escribe los valores seleccionados en una caja de texto
function cambiarColor()
{
  var seleccion=document.getElementById('select1');


  document.getElementById('text3').value=seleccion.options[seleccion.selectedIndex].value;
}

function cambiar()
{
  var seleccion=document.getElementById('select2');
 
  document.getElementById('text6').value=seleccion.options[seleccion.selectedIndex].value;
}
function nacimiento()
{
  var seleccion=document.getElementById('select3');

  document.getElementById('text9').value=seleccion.options[seleccion.selectedIndex].value;
}




*/







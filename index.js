console.time("Contador")
console.timeLog("Contador")
console.timeEnd("Contador");

function rand(n){
     // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
      return(Math.floor(Math.random() * n + 1 ));
     }
     //guardas imagenes en el array
     var cambia_imagen = new Array();
     cambia_imagen[0] = "images (78).jpeg";
     cambia_imagen[1] = "images (79).jpeg";
     cambia_imagen[2] = "images (80).jpeg";
     cambia_imagen[3] = "images (81).jpeg";
     cambia_imagen[4] = "images (82).jpeg";
     cambia_imagen[5] = "images (83).jpeg";
     cambia_imagen[6] = "images (84).jpeg";
     cambia_imagen[7] = "images (85).jpeg";
   
     //la función para que al clickear establezca el source del tag imagem que tiene id "ia" (Imagen aleatoria)
     //como no son tantas, puede que alguna vez se repita 2 veces la misma
     //incluso, si usamos numeros para las imágenes, la script puede ser más sencilla
     
     
     function cambiar(){
          document.getElementById("ia").src = cambia_imagen[rand(7)-0];
     }
     

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function enviarMensaje() {
    // Obtiene los valores de los campos de entrada
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var tema = document.getElementById("tema").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Construye el cuerpo del correo electrónico
    var cuerpoMensaje = "Nombre: " + nombre + "\n" +
                        "Teléfono: " + telefono + "\n" +
                        "Correo electrónico: " + correo + "\n" +
                        "Tema: " + tema + "\n\n" +
                        "Mensaje: " + mensaje;
  
    // Envía el correo electrónico utilizando el servicio de correo electrónico de tu servidor
    // Reemplaza "correo_destinatario" con la dirección de correo electrónico a la que deseas enviar el mensaje
    window.location.href = "mailto:pierocr@gmail.com?subject=" + tema + "&body=" + cuerpoMensaje;
  }
  
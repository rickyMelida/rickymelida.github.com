$(document).ready(function () {

  // Boton para ver menu en tamanho movil y tablet
  var btnMenu = document.querySelector("#icono-menu");

  //addEventListener que esta a la escucha de un cambio en boton
  //de mostrar el menu en tamanho movil y tablet
  btnMenu.addEventListener("change", verMenu, false);

  //Aqui vemos el tamanho actual de la pantalla
  var tamaho = screen.width;

  //Aqui vemos el titulo del documento actual
  var titulo = document.title;

  switch (titulo) {
    case 'Ricardo M.':
      $('#menu ul li:nth-child(1)').attr('id', 'selec-item');
      $('#links ul li:nth-child(1)').attr('id', 'selec-item');
      break;

    case 'Habilidades':
      $('#menu ul li:nth-child(4)').attr('id', 'selec-item');
      $('#links ul li:nth-child(4)').attr('id', 'selec-item');
      break;

    case 'Sobre Mi':
      $('#menu ul li:nth-child(2)').attr('id', 'selec-item');
      $('#links ul li:nth-child(2)').attr('id', 'selec-item');
      break;

    case 'Portafolio': 
      $('#menu ul li:nth-child(3)').attr('id', 'selec-item');
      $('#links ul li:nth-child(3)').attr('id', 'selec-item');
      break;

    case 'Contacto':
      $('#menu ul li:nth-child(5)').attr('id', 'selec-item');
      $('#links ul li:nth-child(5)').attr('id', 'selec-item');
      break;

  }

  if (tamaho < 1250) {
    $('#menu').animate({ marginLeft: '-80%' });

  }

  function verMenu() {

    var seleciona = btnMenu.checked;
    var menu = $('#menu');
    var content = $('#contenedor');
    var header = $('header');
    var headerHab = document.querySelector('header');


    if (seleciona) {
      header.animate({ marginLeft: '80%' });
      menu.animate({ marginLeft: '0px' });
      content.addClass('mover-content');
      headerHab.removeAttribute('id');

      if(titulo == 'Portafolio') {
        $('header').css('background', '#008B8B');
      }

    } else {
      header.animate({ marginLeft: '0%' });
      menu.animate({ marginLeft: '-80%' });
      content.removeClass('mover-content');
      headerHab.setAttribute('id', 'header-habilidades');

      if(titulo == 'Portafolio') {
        $('header').css('background', '#f0ffffcc');
      }

    }

  }

  //Se selecciona proyecto que se encuentra en el PORTAFOLIO
  //esto con el fin que se pueda duplicar
  let projects = document.querySelector('.projects');

  //Contenedor de los projectos del PORTAFOLIO
  let contenedor = document.querySelector('#contenedor');

  
  // Aqui duplicamos los proyectos, le agregamos un id diferente
  // a cada uno y lo agregamos al contenedor
  for (let i = 1; i <= 4; i++) {
    let project2 = projects.cloneNode(true);
    project2.removeAttribute('id');
    project2.setAttribute('id', 'project_' + i);
    contenedor.appendChild(project2);
  }


  


  /*
    Aqui seleccionamos la imagen y nombre del proyecto y le cambiamos dichos atributos
  */

  // Proyecto 2
  let imagen = document.querySelector('#project_1 img');
  let tituloProject = document.querySelector('#project_1 .name-project a');
  imagen.setAttribute('src', `../assets/images/projects/ventas/1.jpg`)
  tituloProject.innerHTML = "Ventas";
  tituloProject.href = "./projects/project_2.html";


  // Proyecto 3
  let imagen1 = document.querySelector('#project_2 img');
  let tituloProject1 = document.querySelector('#project_2 .name-project a');
  imagen1.setAttribute('src', `../assets/images/projects/tareas_electrica/1.jpg`);
  tituloProject1.innerHTML = 'Tareas Electricas';
  tituloProject1.href = "./projects/project_3.html";
  
  
  // Proyecto 4
  let imagen2 = document.querySelector('#project_3 img');
  let tituloProject2 = document.querySelector('#project_3 .name-project a');
  imagen2.setAttribute('src', `../assets/images/projects/admin_electrica/1.jpeg`);
  tituloProject2.innerHTML = 'Admin Electricas';
  tituloProject2.href = "./projects/project_4.html";


  // Proyecto 5
  let imagen3 = document.querySelector('#project_4 img');
  let tituloProject3 = document.querySelector('#project_4 .name-project a');
  imagen3.setAttribute('src', `../assets/images/projects/ricky_web/1.jpg`);
  tituloProject3.innerHTML = 'Ricky Web';
  tituloProject3.href = "./projects/project_5.html";


});
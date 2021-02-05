window.onscroll = () => {
  var titulo = document.title;
  var tamaho = screen.width;

  switch (titulo) {
    case 'Ricardo M.':
      scrollEffect(350);
      break;

    case 'Habilidades':
      scrollEffect(350);
      break;

    case 'Sobre Mi':
      scrollEffect(1300);
      break;

    case 'Portafolio':
      scrollEffect(800);
      break;

    case 'Contacto':
      scrollEffect(250);
      break;
    
    default: 
    scrollEffect(0);
  }
}

function scrollEffect(scroll) {
  if (document.body.scrollTop > scroll || document.documentElement.scrollTop > scroll) {
    document.querySelector(".icons-tech").className = "slideUp";
    document.querySelector('.links-pages').className = 'slideUp';
  }
}
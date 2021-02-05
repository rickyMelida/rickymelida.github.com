window.onscroll = () => {
  var titulo = document.title;
  var tamaho = screen.width;

  switch (titulo) {
    case 'Ricardo M.':
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.querySelector(".icons-tech").className = "slideUp";
        document.querySelector('.links-pages').className = 'slideUp';
      }
      break;

    case 'Habilidades':
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.querySelector(".icons-tech").className = "slideUp";
        document.querySelector('.links-pages').className = 'slideUp';
      }
      break;

    case 'Sobre Mi':
      if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.querySelector(".icons-tech").className = "slideUp";
        document.querySelector('.links-pages').className = 'slideUp';
      }
      break;

    case 'Portafolio':
      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.querySelector(".icons-tech").className = "slideUp";
        document.querySelector('.links-pages').className = 'slideUp';
      }
      break;

    case 'Contacto':
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.querySelector(".icons-tech").className = "slideUp";
        document.querySelector('.links-pages').className = 'slideUp';
      }
      break;
    
    default: 
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.querySelector(".icons-tech").className = "slideUp";
      document.querySelector('.links-pages').className = 'slideUp';
    }

  }
}
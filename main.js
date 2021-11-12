

window.addEventListener('resize', adjustStylesheet(), false);

function adjustStylesheet() {
 let stylesheet = document.getElementById("stylesheet");
  if ( window.screen.availWidth > 900) {
    stylesheet.setAttribute("href", "desktop.css");
  } else if (window.screen.availWidth > 648) {
    stylesheet.setAttribute("href", "tablet.css");
  } else {
    stylesheet.setAttribute("href", "mobile.css"); 
  }
}





 

window.onchange('resize', adjustStyle())

function adjustStyle() {
  const screenSize = window.screen.width;
  let stylesheet = document.getElementById("stylesheet");
  if ( screenSize > 900) {
    stylesheet.setAttribute("href", "desktop.css");
  } else if (screenSize > 648) {
    stylesheet.setAttribute("href", "tablet.css");
  } else {
    stylesheet.setAttribute("href", "mobile.css"); 
  }
}



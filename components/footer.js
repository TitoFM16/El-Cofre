var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

document.write('\
<nav class="navbar navbar-expand-lg navbar-dark ">\
<div class="container-fluid">\
  <a class="navbar-brand" href="/index.html">El Nuevo Cofre E.D.S</a>\
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
    <span class="navbar-toggler-icon"></span>\
  </button>\
  <div class="collapse navbar-collapse mx-2 px-2" id="navbarSupportedContent">\
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">\
      <li class="nav-item">\
        <a class="nav-link active" aria-current="page" href="/index.html">Inicio</a>\
      </li>\
      <li class="nav-item">\
        <a class="nav-link active"  href="/bomba-popayan/hotel/hotel.html">Hotel El Cacique</a>\
      </li>\
      <li class="nav-item">\
        <a class="nav-link active" href="#">Planos</a>\
      </li>\
      <li class="nav-item dropdown">\
        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">\
          Locales\
        </a>\
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\
          <li><a class="dropdown-item" href="./hotel/hotel.html">Hotel</a></li>\
          <li><a class="dropdown-item" href="./local/local.html">Serviteca</a></li>\
          <li><a class="dropdown-item" href="./construccion.html">Surtidores</a></li>\
          <li><a class="dropdown-item" href="./generador/respaldo.html">Subestación electrica</a></li>\
        </ul>\
      </li>\
      <li class="nav-item">\
        <a class="nav-link active" href="#">Contacto</a>\
      </li>\
  </div>\
</div>\
</nav>\
');
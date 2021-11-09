function myFunction(x) {
  x.classList.toggle("change");
  const navs = document.querySelectorAll('.navbar-items')
  navs.forEach(nav => nav.classList.toggle('navbar-ToggleShow'));

}
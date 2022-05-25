const fixedNavWrapper = document.getElementById("fixedNavWrapper");

function showMobileNav() {
  fixedNavWrapper.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  fixedNavWrapper.style.display = "none";
  document.body.style.overflow = "auto";
}
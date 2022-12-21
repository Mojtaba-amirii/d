let scrollUpButton = document.querySelector(".scroll-up");
scrollUpButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
  behavior: "smooth";
});

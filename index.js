/*** Document is ready */

var elements;

document.addEventListener("DOMContentLoaded", function () {
  elements = new fieldEditor();

  window.addEventListener("scroll", function () {});

  window.addEventListener("resize", function () {
    elements.update();
  });
});

/*** Document is loaded */

window.addEventListener("load", function (event) {});

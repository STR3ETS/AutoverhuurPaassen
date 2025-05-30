window.addEventListener('load', function() {
    var linkerDiv = document.querySelector('.linker-contact-div');
    var rechterDiv = document.querySelector('.rechter-contact-div');

    // Haal de hoogte van de rechter div op
    var rechterDivHeight = rechterDiv.offsetHeight;

    // Zet de hoogte van de linker div gelijk aan de rechter div
    linkerDiv.style.height = rechterDivHeight + 'px';
});

$(document).on("scroll", function() {
  if($(document).scrollTop() > 50) {
    $(".header").addClass("bg-scrolled");
  } else {
    $(".header").removeClass("bg-scrolled");
  }
});

$(".menu-open-icon").on("click", function() {
  $(".menu-mobile").addClass("active");
})
$(".menu-close-icon").on("click", function() {
  $(".menu-mobile").removeClass("active");
})
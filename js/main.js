$(document).ready(() => {
  for (let i = 1; i < 12; i++) {
    if (i < 2) {
      $('#slides').append(`
        <div class="carousel-item active">
          <img src="assets/img/item1.jpg" alt="imagen 1 en carrusel">
        </div>
      `);
    } else {
      $('#slides').append(`
      <div class="carousel-item">
      <img src="assets/img/item${i}.jpg" alt="imagen ${i} en carrusel">
    </div>
      `);
    }
  }

  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});

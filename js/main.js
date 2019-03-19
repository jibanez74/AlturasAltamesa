$(document).ready(() => {
  //  ajaxForm();

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

  $('body').scrollspy({ target: '#main-nav' });

  // Add smooth scrolling
  $('#main-nav a').on('click', function(e) {
    // Check for a hash value
    if (this.hash !== '') {
      // Prevent default behavior
      e.preventDefault();

      // Store hash
      const hash = this.hash;

      // Animate smooth scroll
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        900,
        function() {
          // Add hash to URL after scroll
          window.location.hash = hash;
        }
      );
    }
  });
});

// function ajaxForm() {
//   $('#myForm').submit(e => {
//     e.preventDefault();

//     const $form = $(this);
//     $.post($form.attr('action'), $form.serialize()).then(() => {
//       $('#myForm').fadeOut('slow');
//       $('#success-card').fadeIn('slow');
//       $('#name, email, phone, msg').val('');

//       setTimeout(() => {
//         $('#success-card').fadeOut('slow');
//         $('#myForm').fadeIn('slow');
//       }, 6000);
//     });
//   });
// }

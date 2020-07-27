// $(document).ready(() => {
//   for (let i = 1; i < 12; i++) {
//     if (i < 2) {
//       $('#slides').append(`
//         <div class="carousel-item active">
//           <img class="d-block w-100" src="assets/img/item1.jpg" alt="imagen 1 en carrusel">
//         </div>
//       `);
//     } else {
//       $('#slides').append(`
//       <div class="carousel-item">
//       <img class="d-block w-100" src="assets/img/item${i}.jpg" alt="imagen ${i} en carrusel">
//     </div>
//       `);
//     }
//   }

//   $('body').scrollspy({ target: '#main-nav' });

//   // Add smooth scrolling
//   $('#main-nav a').on('click', function(e) {
//     // Check for a hash value
//     if (this.hash !== '') {
//       // Prevent default behavior
//       e.preventDefault();

//       // Store hash
//       const hash = this.hash;

//       // Animate smooth scroll
//       $('html, body').animate(
//         {
//           scrollTop: $(hash).offset().top
//         },
//         900,
//         function() {
//           // Add hash to URL after scroll
//           window.location.hash = hash;
//         }
//       );
//     }
//   });
// });

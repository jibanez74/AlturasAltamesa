$(document).ready(() => {
  generateSlides();
});

function generateSlides() {
  for (let i = 1; i < 13; i++) {
    if (i < 2) {
      $('#slides').append(`
      <div class="carousel-item active">
      <img src="./assets/img/item${i}.jpg" class="d-block w-100" alt="imagen de apartamento"></img>
    </div>
      `);
    } else {
      $('#slides').append(`
      <div class="carousel-item">
      <img
        src="./assets/img/item${i}.jpg"
        class="d-block w-100"
        alt="imagen de apartamento"
      />
    </div>
      `);
    }
  }
}

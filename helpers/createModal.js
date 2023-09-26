// import * basicLightbox from 'basiclightbox';
// import './../'

function createModal({ description, img, name, price }) {
  const instance = basicLightbox
    .create(
      `<div>
  <img src="${img}" alt="${name}">
  <h2>${name}</h2>
  <h3>${price}</h3>
  <p>${description}</p>
</div>`,
    )
    .join('');
  instance.show();
}

function createMarkup(container, arr) {
  const markup = arr
    .map(
      ({ id, img, name }) =>
        `<li data-product-id='${id}'} class='js-card'>
        <img src="${img}" alt="${name}">
        <h2>${name}</h2>
        <a href='#' class='js-info'>More information</a>
        <div>
            <button class='js-favourite'>Add favourite</button>
            <button class='js-basket'>Add to basket</button>
        </div>  
    </li>`,
    )
    .join('');
  container.innerHTML() = markup;
}
export {createMarkup}

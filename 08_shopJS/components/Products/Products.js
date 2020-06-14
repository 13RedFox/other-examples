class Products {
  render() {
    let htmlCatlog = '';

    CATALOG.forEach(({id, name, price, img, display, chip}) => {
      htmlCatlog += `
        <li class="products__item">
          <span class="products__item-name">${name}</span>
          <img class="products__item-img" src="${img}" alt="">
          <span class="products__item-price">🔥 ${price.toLocaleString()} $</span>
          <span class="products__item-display">${display}</span>
          <span class="products__item-chip">${chip}</span>
          <button class="products__item-btn">Добавить в корзину</button>
        </li>
      `;
    });

    const html = `
      <ul class="products__list">
        ${htmlCatlog}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();

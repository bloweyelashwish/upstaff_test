(function upstaffTest() {
  const productsWrapper = document.querySelector('.product-items');
  const newListProduct = document.createElement('li');
  const insertPos = 4;
  const offset = 1;
  const productAtInsertPos = productsWrapper.querySelector(
    `li:nth-child(${insertPos + offset})`
  );

  const contentBox = document.createElement('form');
  const contentMain = document.createElement('div');
  const contentBottomDetails = document.createElement('p');

  const newProductParagraph = document.createElement('p');

  newProductParagraph.innerText = 'Test Product';
  contentBottomDetails.innerText = 'Price volume';

  contentMain.appendChild(newProductParagraph);
  contentBox.appendChild(contentMain);
  contentBox.appendChild(contentBottomDetails);
  newListProduct.appendChild(contentBox);

  const mediaQueries = {
    tablet: window.matchMedia('(min-width: 768px)'),
    desktop: window.matchMedia('(min-width: 1024px)'),
  };

  function setWidth(mq, matches = false) {
    if (matches) {
      switch (mq) {
        case 'tablet':
          newListProduct.style.width = '50%';
          break;
        default:
          newListProduct.style.width = 'calc(100% * 2/3 - 2rem)';
      }
    } else {
      newListProduct.style.width = '100%';
    }
  }

  newListProduct.style.cssText = `
    box-sizing: border-box;
    width: 100%;
    margin: 1rem 0;
    padding: 0.5rem;
    min-height: 22rem;
  `;

  contentBox.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    width: 100%;
  `;

  contentMain.style.cssText = `
    box-shadow: 1px 1px 5px 5px #f1f1f1;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    `;

  contentBottomDetails.style.cssText = `
    margin-top: 0.3rem;
    padding: 0.25rem 0;
    font-size: .7rem;
  `;

  Object.entries(mediaQueries).forEach(([breakpoint, matcher]) => {
    setWidth(mediaQueries[breakpoint], matcher.matches);

    matcher.addEventListener('change', (event) =>
      setWidth(breakpoint, event.matches)
    );
  });

  productsWrapper.insertBefore(newListProduct, productAtInsertPos);
})();

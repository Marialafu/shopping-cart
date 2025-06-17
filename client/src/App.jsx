import { useState } from 'react';
import CartContent from './components/cart-content/CartContent';
import CartProducts from './components/cart-products/CartProducts';
import Filters from './components/filters/Filters';
import { PRODUCTS } from './constants/products';

const App = () => {
  const [definedFilter, setDefinedFilter] = useState(0);
  const orderedListByFilter = sortListByFilter(definedFilter);

  const [cartProducts, setCartProducts] = useState([]);

  return (
    <>
      <header className='headerContainer'>
        <h1>Desserts</h1>
      </header>

      <main>
        <Filters
          definedFilter={definedFilter}
          setDefinedFilter={setDefinedFilter}
        />

        <section className='cardsCartContainer'>
          <section className='dessertsGrid'>
            {orderedListByFilter.map(product => (
              <CartProducts
                key={product.id}
                product={product}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            ))}
          </section>

          <section className='cartContainer'>
            <CartContent
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          </section>
        </section>
      </main>
    </>
  );
};

const sortListByFilter = definedFilter => {
  const list = [...PRODUCTS];

  if (definedFilter === 1) {
    const orderedList = list.sort((a, b) => a.title.localeCompare(b.title));
    return orderedList;
  }
  if (definedFilter === 2) {
    const orderedList = list.sort((a, b) => {
      return a.price - b.price;
    });
    return orderedList;
  }

  return list;
};

export default App;

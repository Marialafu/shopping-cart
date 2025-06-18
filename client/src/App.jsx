import { useEffect, useState } from 'react';
import CartContent from './components/cart-content/CartContent';
import CartProducts from './components/cart-products/CartProducts';
import Filters from './components/filters/Filters';
import { getAllProducts } from './lib/utils/api';

const App = () => {
  const [definedFilter, setDefinedFilter] = useState(0);
  const [orderedListByFilter, setOrderedListByFilter] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const orderedListByFilter = await sortListByFilter(definedFilter);
      setOrderedListByFilter(orderedListByFilter);
    };

    fetchProducts();
  }, [definedFilter]);

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
                key={product._id}
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
              orderedListByFilter={orderedListByFilter}
              setOrderedListByFilter={setOrderedListByFilter}
            />
          </section>
        </section>
      </main>
    </>
  );
};

const sortListByFilter = async definedFilter => {
  try {
    const products = await getAllProducts();
    const list = [...products];

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
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default App;

import CardButton from '../card-button/CardButton';
import CardImg from '../card-img/CardImg';
import styles from './cartProducts.module.css'

const CartProducts = ({ product, cartProducts, setCartProducts }) => {
  const productAdded = findProductInCart(cartProducts, product);

  return (
    <article className={styles.dessertCard}>
      <div className={styles.topCard}>
        <CardImg {...product} />
        <CardButton
          productAdded={productAdded}
          addToCart={() => addToCart(product, cartProducts, setCartProducts)}
          incrementQuantity={() =>
            incrementQuantity(product, cartProducts, setCartProducts)
          }
          decrementQuantity={() =>
            decrementQuantity(productAdded, cartProducts, setCartProducts)
          }

          // pasar cantidad de producto suma y resta
        />
      </div>

      <div className={styles.bottomCard}>
        <p className='text featuredText'>${product.price}</p>
        <p className='text'>{product.title}</p>
        <p className='categoryText'>{product.name}</p>
      </div>
    </article>
  );
};

const findProductInCart = (cartProducts, product) => {
  const result = cartProducts.find(
    cartProduct => cartProduct.id === product.id
  );

  return result;
};

const addToCart = (product, cartProducts, setCartProducts) => {
  setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
};

const incrementQuantity = (product, cartProducts, setCartProducts) => {
  const cartUpdated = cartProducts.map(cartProduct => {
    if (cartProduct.id === product.id) {
      cartProduct.quantity++;
    }
    return cartProduct;
  });
  setCartProducts(cartUpdated);
};

const decrementQuantity = (productAdded, cartProducts, setCartProducts) => {
  if (productAdded.quantity <= 1) {
    const cartUpdated = cartProducts.filter(
      cartProduct => cartProduct.id !== productAdded.id
    );
    setCartProducts(cartUpdated);
    return;
  }

  const cartUpdated = cartProducts.map(cartProduct => {
    if (cartProduct.id === productAdded.id) {
      cartProduct.quantity--;
    }
    return cartProduct;
  });
  setCartProducts(cartUpdated);
};

export default CartProducts;

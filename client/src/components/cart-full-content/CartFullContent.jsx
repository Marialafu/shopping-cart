import { updateProduct } from '../../lib/utils/api';
import styles from './cartFullContent.module.css';

const CartFullContent = ({
  cartProducts,
  setCartProducts,
  setOrderedListByFilter
}) => {
  const productQuantityClass = `${styles.subtitle} ${styles.featuredText}`;
  const xButtonClass = `${styles.circle} ${styles.brownCircle} ${styles.eliminateButtonFullCartContainer}`;
  const orderTotalClass = `${styles.categoryText} ${styles.darkText}`;
  const buttonClass = `${styles.button} ${styles.buttonSelected} ${styles.confirmOrderButtonContainer}`;

  return (
    <section className={styles.fullCartContainer}>
      {cartProducts.map(product => {
        return (
          <div className={styles.cartProductContainer} key={product._id}>
            <div className={styles.textFullCartContainer}>
              <div className='titleS'>{product.title}</div>

              <div className={styles.subtitleFullCartContainer}>
                <div className={styles.subtitleInfoFullCartContainer}>
                  <span className={productQuantityClass}>
                    x{product.quantity}
                  </span>
                  <span className={styles.categoryText}>
                    {product.price}$ ud
                  </span>
                  <span className={styles.subtitle}>
                    {finalProductPrice(product)}$ total
                  </span>
                </div>

                <div
                  onClick={() =>
                    eliminateCartProduct(cartProducts, setCartProducts, product)
                  }
                  className={xButtonClass}
                ></div>
              </div>
            </div>
          </div>
        );
      })}

      <div className={styles.totalOrderContainer}>
        <span className={orderTotalClass}>Order Total</span>
        <span className='titleM'>{finalCartPrice(cartProducts)}$</span>
      </div>
      <div className={styles.carbonLabelContainer}>
        <img src='/assets/images/icon-carbon-neutral.svg' alt='' />
        <span className={orderTotalClass}>
          This is a <span className={styles.subtitle}>carbon-neutral</span>{' '}
          delivery
        </span>
      </div>
      <button
        onClick={() =>
          reduceStock(cartProducts, setOrderedListByFilter, setCartProducts)
        }
        className={buttonClass}
      >
        Confirm Order
      </button>
    </section>
  );
};

const eliminateCartProduct = (cartProducts, setCartProducts, product) => {
  const findProduct = cartProducts.find(cartProduct => {
    return product.id === cartProduct.id;
  });

  const cartUpdated = cartProducts.filter(cartProduct => {
    return cartProduct !== findProduct;
  });

  setCartProducts(cartUpdated);
};

const finalProductPrice = product => {
  const result = product.price * product.quantity;
  return result;
};

const finalCartPrice = cartProducts => {
  const productFinalPrice = cartProducts.map(cartProduct => {
    return cartProduct.price * cartProduct.quantity;
  });

  const finalOrderPrice = productFinalPrice.reduce((acc, number) => {
    return acc + number;
  });

  return finalOrderPrice;
};
const reduceStock = async (
  cartProducts,
  setOrderedListByFilter,
  setCartProducts
) => {
  try {
    const updatedProducts = await updateProduct(cartProducts);
    //seteamos los productos que se muestran, no los del carrito.
    setOrderedListByFilter(updatedProducts);
    //seteamos la lista de pedidos para reiniciarlo.
    setCartProducts([]);
  } catch (error) {
    console.log(error);
  }
};

export default CartFullContent;

import styles from './cardButton.module.css';

const CardButton = ({
  productAdded,
  addToCart,
  incrementQuantity,
  decrementQuantity
}) => {
  const generalButtonClass = `${styles.button} ${styles.cardButton}`;
  const addEliminateButtonClass = `${generalButtonClass} ${styles.buttonSelected} ${styles.addEliminateToCartButton}`;

  return (
    <>
      {!productAdded && (
        <button
          onClick={addToCart}
          className={`${generalButtonClass} ${styles.addToCartButton}`}
        >
          <img src='/assets/images/icon-add-to-cart.svg' alt='' />
          <span className={styles.pointerEvents}>Add to Cart</span>
        </button>
      )}

      {productAdded && (
        <button className={addEliminateButtonClass}>
          <img
            onClick={decrementQuantity}
            src='/assets/images/icon-decrement-quantity.svg'
            alt=''
            className={styles.circle}
          />
          <span>{productAdded.quantity}</span>
          <img
            onClick={incrementQuantity}
            src='/assets/images/icon-increment-quantity.svg'
            alt=''
            className={styles.circle}
          />
        </button>
      )}
    </>
  );
};

export default CardButton;

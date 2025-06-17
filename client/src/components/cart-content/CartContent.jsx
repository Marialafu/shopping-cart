import CartEmptyContent from '../cart-empty-content/CartEmptyContent';
import CartFullContent from '../cart-full-content/CartFullContent';

const CartContent = ({ cartProducts, setCartProducts }) => {
  return (
    <>
      <h2 className='titleL'>
        Your Cart ({defineAmountOfProduct(cartProducts)})
      </h2>

      {/* poner un binario, si cart está empty se muestra este componente */}
      {cartProducts.length <= 0 && <CartEmptyContent />}
      {cartProducts.length >= 1 && (
        <CartFullContent
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      )}
    </>
  );
};

const defineAmountOfProduct = cartProducts => {
  if (cartProducts.length === 0) {
    return 0;
  } else {
    let amountOfEachProduct = cartProducts.map(
      cartProduct => cartProduct.quantity
    );
    const totalAmountProducts = amountOfEachProduct.reduce(
      (acc, number) => acc + number
    );
    return totalAmountProducts;
  }
};

export default CartContent;

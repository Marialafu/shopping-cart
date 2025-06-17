import styles from './cardStock.module.css';

const CardStock = product => {
  return <div className={styles.stockContainer}>{product.stock}</div>;
};

export default CardStock;

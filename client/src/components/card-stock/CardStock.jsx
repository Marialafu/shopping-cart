import styles from './cardStock.module.css';

const CardStock = ({ stock }) => {
  return <div className={styles.stockContainer}>{stock}</div>;
};

export default CardStock;

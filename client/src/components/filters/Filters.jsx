import styles from './filters.module.css';
import { FILTER_BUTTONS } from '../../constants/filterButtons';
import { v4 } from 'uuid';

const Filters = ({ definedFilter, setDefinedFilter }) => {
  const filterGeneralClass = `${styles.filterButton} ${styles.button}`;

  return (
    <section className={styles.filterButtonsContainer}>
      {FILTER_BUTTONS.map(filter => (
        <button
          onClick={() => setDefinedFilter(filter.value)}
          key={v4()}
          className={`${filterGeneralClass} 
          ${definedFilter === filter.value && styles.buttonSelected}`}
        >
          {filter.name}
        </button>
      ))}
    </section>
  );
};

export default Filters;

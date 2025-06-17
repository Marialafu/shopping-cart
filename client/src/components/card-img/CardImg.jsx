import styles from './cardImg.module.css';

const CardImg = ({ imgDesktop, imgTablet, imgMobile }) => {
  return (
    <picture>
      <source media='(min-width: 1400px)' srcSet={imgDesktop} />
      <source media='(min-width: 768px)' srcSet={imgTablet} />
      <source media='(min-width: 360px)' srcSet={imgMobile} />

      <img src={imgMobile} alt='' className={styles.dessertPicture} />
    </picture>
  );
};

export default CardImg;

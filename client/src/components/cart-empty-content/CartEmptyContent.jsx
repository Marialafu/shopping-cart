import styles from './cartEmptyContent.module.css'

const CartEmptyContent = () => {

    return (
        <section className={styles.emptyCartContainer}>
        <img src="/assets/images/illustration-empty-cart.svg" alt="" />
        <p className={styles.subtitle}>Your added items will appear here</p>
        </section>
    )

}

export default CartEmptyContent
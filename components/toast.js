import styles from '../styles/Home.module.css'

export default function Toast({ productName, productImg }) {

    return (
        <div className={styles.cart_toast}>
            <strong>Product added to cart</strong>
            <div style={{ height: 1, background: '#e9e9ed', minWidth: 260, margin: '10px 0px 10px 0px' }}></div>
            <div className={styles.cart_toast_item}>
                <img src={productImg} />
                {productName}
            </div>
        </div>
    )
}
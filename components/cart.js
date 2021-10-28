import styles from '../styles/Home.module.css'

export default function Cart({ cartData, removeToCart, closeCart }) {

    return (
        <div className={styles.cart_container}>
            <div onClick={() => closeCart()} className={styles.close_cart}>
                <img src="/assets/close.png" />
            </div>
            {
                cartData.length > 0 ?
                    cartData.map((i, index) =>
                        <div className={styles.cart_item_container} key={i.index}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={i.img} />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    {i.name}
                                    <div className={styles.cart_quantity}>
                                        Quantity:
                                        <input type="number" defaultValue={1} />
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => removeToCart(i)} className={styles.cart_item_remove_btn}>Remove</div>
                        </div>
                    )
                    :
                    <strong>Your shopping cart is empty  :-(</strong>
            }
        </div>
    )
}
import styles from '../styles/Home.module.css'
import { Products } from '../productsData'
import Link from 'next/link'


export default function ProductsContainer({ selectedCategory, addToCart }) {

    return (
        <div className={styles.products_container}>
            <p1>Products under <strong>{selectedCategory}</strong></p1>
            <div className={styles.products_list}>
                {
                    Products[`${selectedCategory}`].map((i, index) =>
                        <div key={index} className={styles.product_container}>
                            <img src={i.img} alt="product-img" />
                            {i.name}
                            <div onClick={() => addToCart(i)} className={styles.add_cart_btn}>
                                ADD TO CART
                            </div>
                            <Link href={{
                                pathname: '/products',
                                query: { name: i.name, category: selectedCategory }
                            }}>
                                <div className={styles.hover_glass}></div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
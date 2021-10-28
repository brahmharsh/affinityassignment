import styles from '../styles/Home.module.css'
import { Products } from '../productsData'

export default function LeftContainer({ category, selectedCategory, hamburgerMenu, hamBurgerMenuHandle }) {
    const changeCategory = (i) => {
        category(i)
        if (innerWidth < 620) {
            hamBurgerMenuHandle()
        }
    }

    return (
        <div className={hamburgerMenu ? styles.left_container_mobile : styles.left_container} >
            <div onClick={() => hamBurgerMenuHandle()} className={styles.close_hambuger}>
                {
                    hamburgerMenu ? <img src="/assets/close.png" /> : ''
                }
            </div>
            {
                Object.keys(Products).map((i, index) =>
                    <div key={index} onClick={() => changeCategory(i)} className={styles.category_btn} style={{ background: i === selectedCategory ? 'var(--theme)' : '', color: i === selectedCategory ? 'var(--primary)' : '' }}>
                        {i}
                        <svg className={styles.right_arrow_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M332.8 854.016c-17.408-17.408-18.944-36.352-11.264-44.032L619.52 512 321.536 214.016c-15.36-15.36-14.848-29.184 5.632-49.664s36.864-18.432 49.664-5.632l330.24 330.24c14.336 14.336 13.824 29.696 0.512 45.056L376.832 865.28c-7.168 7.168-26.624 6.144-44.032-11.264z" /></svg>
                    </div>
                )
            }
        </div>
    )
}
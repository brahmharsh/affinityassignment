import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Cart from './cart'
import Toast from './toast'
import Link from 'next/link'

export default function Layout({ children, cartData, removeToCart, hamBurgerMenuHandle, closeCart }) {

    const [productName, setProductName] = useState('')
    const [productImg, setProductImg] = useState('')
    const [showToast, setShowToast] = useState(false)
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        if (cartData) {
            const cartLength = cartData.length
            const lastItemAdded = cartData[cartLength - 1]
            if (cartLength > 0) {
                setProductName(lastItemAdded.name)
                setProductImg(lastItemAdded.img)
                setShowToast(true)
                setTimeout(() => {
                    setShowToast(false)
                }, 3000);
            }
        }
    }, [cartData])

    const openCart = () => {
        setShowToast(false)
        setShowCart(true)
    }

    return (
        <>
            <Head>
                <title>AffinityAnswers Assignment</title>
                <meta name="description" content="AffinityAnswers Assignment" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div className={styles.logo}>
                    <img onClick={() => hamBurgerMenuHandle()} className={styles.hamburger_menu} src="/assets/hamburger-menu.png" />
                    <Link href="/">
                        <a>
                            <img src="logo" src="/assets/logo.svg" />
                        </a>
                    </Link>
                </div>
                <div className={styles.header_options}>
                    <div className={styles.cart_icon}>
                        <div onClick={openCart} style={{ cursor: 'pointer' }}>
                            <img src="/assets/handbag.png" />
                            {
                                cartData && cartData.length > 0 ?
                                    <div className={styles.badge}>{cartData.length}</div>
                                    : ''
                            }
                        </div>
                        {
                            showToast ? <Toast productName={productName} productImg={productImg} /> : ''
                        }
                        {
                            showCart ?
                                <div>
                                    <Cart cartData={cartData ? cartData : ''} removeToCart={(i) => removeToCart(i)} closeCart={() => setShowCart(false)} />
                                    <div onClick={() => { setShowCart(false); setShowToast(false) }} className={styles.preventer_screen}></div>
                                </div>
                                : ''
                        }
                    </div>
                    <div className={styles.user_profile_container}>
                        <img src="/assets/dp.jpg" alt="user-picture" />
                        <p>Brahm Harsh Parmar</p>
                    </div>
                </div>
            </header>
            {children}
        </>
    )
}
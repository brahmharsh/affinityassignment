import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import LeftContainer from '../components/leftContainer'
import { useEffect, useState } from 'react'
import ProductsContainer from '../components/productsContainer'
import { Products } from '../productsData'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(Products)[0])
  const [cartData, setCartData] = useState([])
  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  const addToCart = (i) => {
    setCartData([...cartData, i])
  }

  const removeToCart = (i) => {
    var arr = cartData
    let removeItem = i.name
    arr = arr.filter(item => !removeItem.includes(item.name))
    setCartData(arr)
  }

  const hamBurgerMenuHandle = () => {
    hamburgerMenu ? setHamburgerMenu(false) : setHamburgerMenu(true)
  }


  return (
    <Layout cartData={cartData} removeToCart={(i) => removeToCart(i)} hamBurgerMenuHandle={hamBurgerMenuHandle}>
      <div className={styles.container}>
        <main className={styles.main}>
          <LeftContainer hamburgerMenu={hamburgerMenu} hamBurgerMenuHandle={hamBurgerMenuHandle} selectedCategory={selectedCategory} category={(i) => setSelectedCategory(i)} />
          <ProductsContainer selectedCategory={selectedCategory} addToCart={(i) => addToCart(i)} />
        </main>
      </div>
    </Layout>
  )
}

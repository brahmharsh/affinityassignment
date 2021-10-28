import Layout from "../../components/layout"
import { useRouter } from 'next/router'
import styles from '../../styles/Product.module.css'
import { Products } from '../../productsData'
import { useEffect, useState } from "react"
import Link from 'next/link'

const Product = () => {
  const router = useRouter()
  const product_category = router.query.category
  const product_name = router.query.name

  const [productImage, setProductImage] = useState('')
  const [productName, setProductName] = useState('')

  useEffect(() => {
    if (product_category) {
      const productsFromCategory = Products[`${product_category}`]

      function search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i].name === nameKey) {
            return myArray[i];
          }
        }
      }

      var resultProduct = search(product_name, productsFromCategory);
      setProductImage(resultProduct.img)
      setProductName(resultProduct.name)
    }
  }, [product_category, product_name])

  return (
    <Layout>
      <div className={styles.product_container}>
        <div className={styles.product_img}>
          <img src={productImage} />
        </div>
        <div className={styles.product_detail}>
          <h1>{product_name}</h1>
        </div>
        <Link href="/">
          <a>
            <div className={styles.back_btn}>
              <svg className={styles.right_arrow_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M332.8 854.016c-17.408-17.408-18.944-36.352-11.264-44.032L619.52 512 321.536 214.016c-15.36-15.36-14.848-29.184 5.632-49.664s36.864-18.432 49.664-5.632l330.24 330.24c14.336 14.336 13.824 29.696 0.512 45.056L376.832 865.28c-7.168 7.168-26.624 6.144-44.032-11.264z" /></svg>
              Back
            </div>
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default Product
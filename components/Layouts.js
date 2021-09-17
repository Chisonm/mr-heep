import Navbar from './navbar'
import Footer from './footer'
import styles from '../styles/Home.module.css'


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.container}>{children}</main>
      </div>
      <Footer />
    </>
  )
}
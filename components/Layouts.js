import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/Home.module.css'



const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        <main className={styles.container}>
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout
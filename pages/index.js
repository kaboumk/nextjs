import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/dist/client/link'



const Home = () => {
  return (
    <>
   <Head>
       <title>Atom Web & Designs | Home</title>
       <meta name="keywords" content="developpeur web site internet réunion"/>
    </Head>
    <main>
      <p className={styles.littletitle}>Je suis Hubert Wasier</p>
      <h1 className={styles.title}>Je crée des sites Web que vos utilisateurs vont adorer.</h1>
      <maingrid className={styles.maingrid}>

      </maingrid>  
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninjas Listing</a>
      </Link>
    </main>
    </>
  )
  }

export default Home;

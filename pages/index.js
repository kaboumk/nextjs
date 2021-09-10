import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'



const Home = () => {
  return (
    <>
    <Head>
       <title>Atom Web & Designs | Home</title>
       <meta name="keywords" content="developpeur web site internet réunion"/>
    </Head>
    <main>
      <p className={styles.littletitle}>Bonjour, je m'appelle Hubert.</p>
      <h1 className={styles.title}>Je crée les sites Web que vos utilisateurs vont adorer<span className="tilt">.</span></h1>
      <section>
        <maingrid className={styles.maingrid}>
          <p className={`${styles.box} ${styles.argumentaire}`}>
            <span>rapide</span>
            <span>securisé</span>
            <span>stable</span>
            <span>évolutif</span>
          </p>
          <div className={styles.box}>titi</div>
          <div className={styles.box}>tata</div>
          <div className={styles.box}>tutu</div>

        </maingrid>  
      </section>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninjas Listing</a>
      </Link>
    </main>
    </>
  )
  }

export default Home;

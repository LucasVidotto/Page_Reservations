import Navbar from '../Components/Navbar'
import Head from 'next/head'
/* import Image from 'next/image'
import styles from '../styles/Home.module.css' */
import styless from '../styles/Global.module.css';
/* import Title from '../styles/styles'; */
import Header from '../Components/Header';
export default function Home() {
  
  return (
    <>
      <div className={styless.global}>
        <Head>
          <title>Página Principal</title>
          <meta name="keyworkds" content="Roupas, calçados"></meta>
          <meta name="description" content="Encontre a melhor roupa para você"></meta>
        </Head>
        {/* <div className={styles.container}>
          <Title>Hellow World</Title>
          <Image className={styless.image}
            src="/images/zelda.jpg" 
            width="200px" 
            height="200px" 
            alt="Imagem"
          />
        </div> */}
      </div>
    </>
  )
}

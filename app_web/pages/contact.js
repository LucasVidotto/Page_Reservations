import Head from "next/head";
import styles  from '../styles/Global.module.css';

export default function Contact(){
    return(
        <>
            <div className={styles.global}>
                <Head >
                    <title>Página de contato </title>
                </Head>
                <h1>Página de contato</h1>
            </div>
        </>
    )
}
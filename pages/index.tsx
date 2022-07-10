import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Arab Academy</title>
                <meta name="description" content="Arab Academy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Header />
            </header>
            <main className={styles.main}>index arab network</main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;

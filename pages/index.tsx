import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
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

            <main className={styles.main}>
                <Layout />
            </main>

            <footer className={styles.footer}>
                {/* <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a> */}
                <Footer />
            </footer>
        </div>
    );
};

export default Home;

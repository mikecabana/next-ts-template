import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Image from 'next/image';
import React from 'react';
import { Layout } from '../components/Layout';

export default function Home() {

    return (<Layout>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.hero}>
            <div className={styles.heroImage}>
                <Image src="https://picsum.photos/1080/200" alt="Hero" height={200} width={1080} layout="fixed" objectFit="cover" />
            </div>
        </div>

        <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
                <h3>Documentation &rarr;</h3>
                <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
                <h3>Learn &rarr;</h3>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className={styles.card}>
                <h3>Examples &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}>
                <h3>Deploy &rarr;</h3>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
        </div>

    </Layout>);
}

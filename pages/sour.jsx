import { Container } from '@chakra-ui/layout';
import Head from 'next/head';
import React from 'react';
import { getTable } from '../airtable';
import Layout from '../Components/Layout';
import SourComponent from '../Components/SourComponent';
import styles from '../styles/Photos.module.css';

function Sour({ sour, desk }) {
  return (
    <Layout>
      <Head>
        <title>Cristiano Ronaldo - Sour</title>
        <meta name="description" content="Cristiano Ronaldo" />
        <meta name="author" content="Mr.SteelCan" />
        <meta
          name="keywords"
          content="Cristiano, Ronaldo, Cristiano Ronaldo, Cr7, cr7"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:url"
          content="https://cristiano-ronaldo-7.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cristiano Ronaldo" />
        <meta property="og:description" content="Cristiano Ronaldo" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://cristiano-ronaldo-7.vercel.app"
        />
        <meta name="twitter:title" content="Cristiano Ronaldo" />
        <meta name="twitter:description" content="Cristiano Ronaldo" />
        <link rel="icon" href="/a.png" />
      </Head>
      <Container maxW="container.sm">
        <div className={styles.photosText} style={{ textAlign: 'justify' }}>
          İşlerimi yaparken ve günlük hayatta sık kullandığım araçların listesi.
        </div>
      </Container>
      <SourComponent sour={sour} desk={desk} />
    </Layout>
  );
}

export default Sour;

export async function getStaticProps({}) {
  const data = await getTable('sour');

  const sour = data.filter((o) => o.Category == 'Sour');
  const desk = data.filter((o) => o.Category == 'Desk');

  return {
    props: {
      sour: [...sour],
      desk: [...desk],
    },
    revalidate: 60,
  };
}

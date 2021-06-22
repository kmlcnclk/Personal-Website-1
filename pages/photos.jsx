import Head from 'next/head';
import React from 'react';
import Layout from '../Components/Layout';
import { getTable } from '../airtable';
import { Container } from '@chakra-ui/layout';
import PhotosComponent from '../Components/PhotosComponent';
import styles from '../styles/Photos.module.css';

function Photos({ data }) {
  return (
    <Layout>
      <Head>
        <title>Cristiano Ronaldo - Photos</title>
        <meta name="description" content="Cristiano Ronaldo" />
        <meta name="author" content="Mr.SteelCan" />
        <meta
          name="keywords"
          content="Cristiano, Ronaldo, Cristiano Ronaldo, Cr7, cr7"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:url"
          content="https://cristianoronaldo7.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cristiano Ronaldo" />
        <meta property="og:description" content="Cristiano Ronaldo" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://cristianoronaldo7.vercel.app"
        />
        <meta name="twitter:title" content="Cristiano Ronaldo" />
        <meta name="twitter:description" content="Cristiano Ronaldo" />
        <link rel="icon" href="/a.png" />
      </Head>
      <div>
        <Container maxW="container.sm">
          <div className={styles.photosText} style={{ textAlign: 'justify' }}>
            Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor.
            Çevrem hakkında farkındalığı, detayları görebilmemi ve doğru anı
            yakalabilmeyi öğretiyor.
          </div>
        </Container>
        <PhotosComponent data={data} />
      </div>
    </Layout>
  );
}

export default Photos;

export async function getStaticProps({}) {
  const data = await getTable('photos');

  const home = data.filter((o) => o.Category == 'photos');

  return {
    props: {
      data: [...home],
    },
    revalidate: 60,
  };
}

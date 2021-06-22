import { Container } from '@chakra-ui/layout';
import Head from 'next/head';
import React from 'react';
import { getTable } from '../../airtable';
import Layout from '../../Components/Layout';
import styles from '../../styles/Photos.module.css';
import styles1 from '../../styles/Notes.module.css';
import NotesComponent from '../../Components/NotesComponent';

function Notes({ data }) {
  return (
    <Layout>
      <Head>
        <title>Kamilcan Çelik - Notes</title>
      </Head>
      <Container maxW="container.sm">
        <div className={styles1.photosText}>Kendime notlar</div>
        <div className={styles1.photosText2}>
          bu sayfa henüz beta aşamasında. medium'da yayınladığım yazıları en
          kısa sürede buraya taşıyacağım inş{' :)'}
        </div>
        <NotesComponent data={data} />
      </Container>
    </Layout>
  );
}

export default Notes;

export async function getStaticProps({}) {
  const data = await getTable('notes');

  //   const home = data.filter((o) => o.Category == 'education');

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

import Head from 'next/head';
import { Image } from '@chakra-ui/image';
import { useState } from 'react';
import Layout from '../Components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Container } from '@chakra-ui/layout';
import Social from '../Components/Social';
import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cristiano Ronaldo - Home Page</title>
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
      <Container maxW="container.sm">
        <div className="mt-5 mb-4">
          <h1
            style={{
              fontFamily: 'sans-serif',
              margin: '0.5rem',
              fontSize: '1.4rem',
            }}
          >
            <strong> I'm Cristiano Ronaldo.</strong>
          </h1>
          <h1
            style={{
              fontFamily: 'sans-serif',
              margin: '0.5rem',
              fontSize: '1.4rem',
            }}
          >
            <strong>I am a football player who plays for Juventus.</strong>
          </h1>{' '}
          <div
            style={{
              marginTop: '3rem',
              fontFamily: 'monospace',
              padding: '0.5rem',
              marginBottom: '4rem',
            }}
          >
            {/* <p>
              Tasarım araçları, front-end teknolojileri, sokak fotoğrafçılığı ve
              tipografi gibi konularla yakından ilgileniyorum.
            </p>
            <p className="mt-4">
              Youtube kanalımda sektördeki eski teknoloji ve alışkanlıkları
              yenilerle değiştirmek için modern türkçe içerikler üretiyorum.
            </p> */}
            <Flex justify="center" direction="column" align="center">
              <Image
                width="100%"
                height="auto"
                src="/a.png"
                objectFit="contain"
              />
              <Flex justify="center" p="3" align="center">
                <Flex justify="center" align="center">
                  <Social />
                </Flex>
              </Flex>
            </Flex>
            <p style={{ textAlign: 'justify' }}>
              Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese
              pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a
              Portuguese professional footballer who plays as a forward for
              Serie A club Juventus and captains the Portugal national team.
              Often considered the best player in the world and widely regarded
              as one of the greatest players of all time, Ronaldo has won five
              Ballon d&apos;Or awards[note 3] and four European Golden Shoes,
              both of which are records for a European player. He has won 32
              major trophies in his career, including seven league titles, five
              UEFA Champions Leagues, one UEFA European Championship, and one
              UEFA Nations League title. Ronaldo holds the records for the most
              goals (134) in the Champions League and the most goals (12) in the
              European Championship. He is one of the few recorded players to
              have made over 1,100 professional career appearances and has
              scored over 790 official senior career goals for club and country.
              He is also the second male to score 100 international goals and
              the first European male to achieve the feat.
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({}) {
  return {
    props: {},
  };
}

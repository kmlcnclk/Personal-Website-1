import Head from 'next/head';
import React from 'react';
import Layout from '../Components/Layout';
import { getBookmarks } from '../raindrop';
import { Container } from '@chakra-ui/layout';
import styles from '../styles/Photos.module.css';
import styles1 from '../styles/Bookmarks.module.css';
import BookmarksComponent from '../Components/BookmarksComponent';
import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { Box, Heading } from '@chakra-ui/react';

function Bookmarks({ dataBookmarks: data, dates }) {
  return (
    <Layout>
      <Head>
        <title>Cristiano Ronaldo - Bookmarks</title>
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
        <div className={styles.photosText} style={{ textAlign: 'justify' }}>
          İnternette gezinirken beğendiğim ve beni takip edenlerin de
          beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık şeyler.
        </div>
        {/* {weeks ? (
          <div>
            {weeks.map((week, index) => (
              <div key={index}>
                <div className={styles1.week}>{week}. Hafta, 2021</div>
                <div className={`text-center ${styles1.mainData}`}>
                  {data.map((rain) => {
                    if (
                      format(parseISO(rain.created), 'w', {
                        locale: enGB,
                      }) == week
                    ) {
                      return <BookmarksComponent key={rain._id} rain={rain} />;
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : null} */}
        {dates[0] ? (
          <Box mt="14">
            {dates.map((date, index) => (
              <div key={index}>
                <Heading
                  m={4}
                  size="md"
                  bgGradient={['linear(to-b, white, gray.300)']}
                  bgClip="text"
                >
                  {date.week}. Week, {date.year}
                </Heading>
                <div className={`text-center ${styles1.mainData}`}>
                  {data.map((rain) => {
                    if (
                      format(parseISO(rain.created), 'w', {
                        locale: enGB,
                      }) == date.week
                    ) {
                      return <BookmarksComponent key={rain._id} rain={rain} />;
                    }
                  })}
                </div>
              </div>
            ))}
          </Box>
        ) : null}
      </Container>
    </Layout>
  );
}

export default Bookmarks;

export async function getStaticProps({}) {
  // const data = await getBookmarks();
  const dataBookmarks = await getBookmarks();

  var weeks = [];
  var years = [];
  var dates = [];

  // for (let i = 0; i < data.items.length; i++) {
  //   const week = await format(parseISO(data.items[i].created), 'w', {
  //     locale: enGB,
  //   });
  //   if (!weeks.includes(week)) {
  //     await weeks.push(week);
  //   }
  // }
  for (let i = 0; i < dataBookmarks.items.length; i++) {
    const week = await format(parseISO(dataBookmarks.items[i].created), 'w', {
      locale: enGB,
    });
    const year = await format(parseISO(dataBookmarks.items[i].created), 'y', {
      locale: enGB,
    });

    const date = { year, week };
    if (dates[0]) {
      for (let a = 0; a < dates.length; a++) {
        if (!weeks.includes(week)) {
          await dates.push(date);
          await years.push(year);
          await weeks.push(week);
        }
      }
    } else {
      await dates.push(date);
    }
  }

  return {
    props: {
      // data: data.items,
      dataBookmarks: dataBookmarks.items,
      // weeks: weeks.reverse(),
      dates: dates,
    },
    revalidate: 60,
  };
}

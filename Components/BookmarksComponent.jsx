import React from 'react';
// import groupBy from 'lodash.groupby';
// import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { tr, enGB } from 'date-fns/locale';
import { format, formatDistanceToNowStrict } from 'date-fns';
// import Image from 'next/image';
import styles from '../styles/Bookmarks.module.css';
import Link from 'next/link';

function BookmarksComponent({ rain }) {
  return (
    <div className={styles.rainDiv}>
      <Link href={rain.link}>
        <a target="_blank">
          <img className={styles.img} src={rain.cover} />
        </a>
      </Link>

      <div className={styles.width + ' text-left'}>{rain.title}</div>
      <div className={styles.created + ' text-left ' + styles.width}>
        {rain.domain} -{' '}
        {formatDistanceToNowStrict(parseISO(rain.created), {
          addSuffix: true,
          locale: enGB,
        })}
      </div>
    </div>
  );
}

export default BookmarksComponent;

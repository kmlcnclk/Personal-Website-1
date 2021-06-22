import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';
import React from 'react';
import styles from '../styles/Notes.module.css';

function NotesComponent({ data }) {
  return (
    <div className="mt-5">
      {data.map((note) => (
        <div key={note.Id}>
          <div className={styles.noteDivName}> {note.Name}</div>
          <div className={styles.noteDivCreated}>
            {formatDistanceToNowStrict(parseISO(note.Created), {
              addSuffix: true,
              locale: enGB,
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotesComponent;

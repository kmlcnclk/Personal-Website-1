import React from 'react';
import styles from '../styles/Photos.module.css';
import styles1 from '../styles/Education.module.css';

function EducationComponent({ data }) {
  return (
    <div className={` row ${styles.mainDiv}`}>
      <div className="col-md-6">
        {data.map((photo, index) => {
          if (index % 2 == 0) {
            return (
              <div className={styles.ImageDiv} key={photo.Id}>
                <div className="text-center">
                  <img
                    className={styles.img}
                    src={photo.Attachments[0].thumbnails.large.url}
                  />
                </div>

                <div className={styles1.educationName}>
                  <div> {photo.Name} </div>
                </div>
                <div className={styles1.educationText}>
                  <div className="d-inline-block">
                    {photo.Category}, {photo.Notes}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="col-md-6">
        {data.map((photo, index) => {
          if (index % 2 == 1) {
            return (
              <div className={styles.ImageDiv} key={photo.Id}>
                <div className="text-center">
                  <img
                    className={styles.img}
                    src={photo.Attachments[0].thumbnails.large.url}
                  />
                </div>

                <div className={styles1.educationName}>
                  <div> {photo.Name} </div>
                </div>
                <div className={styles1.educationText}>
                  <div className="d-inline-block">
                    {photo.Category}, {photo.Notes}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default EducationComponent;

import React from "react";
import styles from "./Me.module.scss";

export default function Mecomp() {
  return (
    <>
      <div id="vert">
        <div className={styles.cont1}>
          {/* <img className={styles.photu1} src='/images/9.jpg' /> */}

          <div className={styles.cont2}>
            <h1 className={styles.spandita}>I'm spandita</h1>
            <p className={styles.spandita1}>
              I'm a student, currently conferring my B.Tech in Artificial
              Intelligence and Data Science. When I created my first website, I
              still remember the amount of delight I felt. I love to create
              meaningful exposures through my designs and my developing skills.
              Playing guitar while singing is something I am extremely grateful
              for. love to read and plant. Always open to new opportunities and
              eager to learn something new everyday.
            </p>
          </div>

          <div className={styles.cont3}>
            <img className={styles.photu} src="/images/img-1.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

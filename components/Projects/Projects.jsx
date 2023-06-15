import React from "react";
import styles from "./Projects.module.scss";

export default function Maincomp() {
  return (
    <>
      <div id="pro">
        <div className={styles.cardss}>
          <div className={styles.container}>
            <hr
              className={styles.hrrr}
              style={{ width: "30%", marginLeft: "35vw", borderBottom: "none" }}
            />
            <h1
              className={styles.head}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              My projects
            </h1>
            <div
              className={styles.wrap}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className={styles.card}>
                <img
                  className={styles.imgs}
                  src="./images/pro2.png"
                  alt=""
                ></img>
                <div className={styles.info}>
                  <h4 className={styles.head1}>HABITICIAN</h4>
                </div>
              </div>
              <div className={styles.text}>
                Built and designed an app for creating your own habits, creating
                groups with your friends and competing with them, Which got
                shortlisted for one of the top 3 projects on peerlist in
                peerlist in one of the India's largest community hackathon.
                Using Ionic, Sass, React charts, Firebase and other technologies
              </div>
            </div>
            <hr
              className={styles.hrr}
              style={{
                width: "30%",
                marginLeft: "35vw",
                borderBottom: "none",
              }}
            />

            <div className={styles.wrapp}>
              <div
                className={styles.wrap}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className={styles.card}>
                  <img
                    className={styles.imgs}
                    src="./images/pro1.png"
                    alt=""
                  ></img>
                  <div className={styles.info}>
                    <h4 className={styles.head1}>CODING CLUB</h4>
                  </div>
                </div>
                <div className={styles.text}>
                  Designed and developed this website using Particle.js And
                  Next.js for my college's coding club. Includes all updates
                  related to club's Events. Which helps all the freshers and
                  non-club members to get the updates.{" "}
                </div>
              </div>
              <hr
                className={styles.hrr}
                style={{
                  width: "30%",
                  marginLeft: "35vw",
                  borderBottom: "none",
                }}
              />

              <div
                className={styles.wrap}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className={styles.card}>
                  <img
                    className={styles.imgs}
                    src="./images/pro4.png"
                    alt=""
                  ></img>
                  <div className={styles.info}>
                    <h4 className={styles.head1}>MENTAL HEALTH PROJECT</h4>
                  </div>
                </div>
                <div className={styles.text}>
                  Designed a website where people may keep track of their mental
                  health and receive assistance with it.Users can share their
                  stories and interact with different therapists based on where
                  they are.Various blogs and scientific papers on a range of
                  mental diseases.
                </div>
              </div>

              <hr
                className={styles.hrr}
                style={{
                  width: "30%",
                  marginLeft: "35vw",
                  borderBottom: "none",
                }}
              />

              <div
                className={styles.wrap}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className={styles.card}>
                  <img
                    className={styles.imgs}
                    src="./images/g11.png"
                    alt=""
                  ></img>
                  <div className={styles.info}>
                    <h4 className={styles.head1}>VAN-GOGH BOOKSTORE</h4>
                  </div>
                </div>
                <div className={styles.text}>
                  Designed and developed a pretty Van-gogh based bookstore.
                  Basically an E-commerce for books. Designed and prototyped on
                  Figma. Developed in Next.js, and used SASS for styling.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

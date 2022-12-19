import React from 'react'
import styles from "./Projects.module.scss"



export default function Maincomp() {
    return (
        <>

            <div className={styles.container}>
            <hr className={styles.hrrr} style={{ width: '30%', marginLeft: '35vw' , borderBottom:'none'}} />
                <h1 className={styles.head}>MY PROJECTS</h1>

<div className={styles.wrapp}>
                <div className={styles.wrap}>
                    <div className={styles.card}>
                        <img className={styles.imgs} src="./images/pro1.png" alt=""></img>
                        <div className={styles.info}>
                            <h4 className={styles.head1}>CODING CLUB</h4>
                        </div>
                    </div>
                    <div className={styles.text}>Created this website using Particle.js And Next.js for my college's coding club. Includes all updates related to club's Events. Which helps all the freshers and non-club members to get the updates.  </div>
                </div>
                <hr className={styles.hrr} style={{ width: '30%', marginLeft: '35vw' , borderBottom:'none'}} />

                <div className={styles.wrap}>
                    <div className={styles.card}>
                        <img className={styles.imgs} src="./images/pro4.png" alt=""></img>
                        <div className={styles.info}>
                            <h4 className={styles.head1}>MENTAL HEALTH PROJECT</h4>
                        </div>
                    </div>
                    <div className={styles.text}>Designed a website where people may keep track of their mental health and receive assistance with it.Users can share their stories and interact with different therapists based on where they are.Various blogs and scientific papers on a range of mental diseases.</div>
                </div>

                <hr className={styles.hrr} style={{ width: '30%', marginLeft: '35vw' , borderBottom:'none'}} />

                <div className={styles.wrap}>
                    <div className={styles.card}>
                        <img className={styles.imgs} src="./images/pro3.png" alt=""></img>
                        <div className={styles.info}>
                            <h4 className={styles.head1}>SCM USING NFT'S</h4>
                        </div>
                    </div>
                    <div className={styles.text}>A system for monitoring The supply Chain and a centralized platform for the authenticity Verification of Products and Warranty Claims.Integrated the Physical Devices of Multitasking Companies With their NFT Counterparts.  </div>
                </div>

                <hr className={styles.hrr} style={{ width: '30%', marginLeft: '35vw' , borderBottom:'none'}} />

                <div className={styles.wrap}>
                    <div className={styles.card}>
                        <img className={styles.imgs} src="./images/pro2.png" alt=""></img>
                        <div className={styles.info}>
                            <h4 className={styles.head1}>SCHOLARSHIP PORTAL</h4>
                        </div>
                    </div>
                    <div className={styles.text}>A place where students can find all the scholarships available according to their eligibility.The requested information will be filled out by the students, and all of the sorted scholarships will then be shown.Students can communicate with a variety of counsellors and mentors.</div>
                </div>


            </div>
            </div>

        </>
    )
}
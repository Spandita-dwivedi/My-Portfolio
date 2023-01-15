import React, { useEffect, useRef } from 'react'
import styles from "./Vertical.module.scss"


export default function Verticalcomp() {

    return (
        <>

            <div className={styles.cards}>

                <div className={styles.card1}>


                    <img className={styles.img1} src='/images/graphic-design.png' />
                    <h1 className={styles.head} style={{ fontWeight: 'bolder' }}>Designer</h1>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>

                    <h4>Things I enjoy designing :</h4>
                    <p>UI, Web, Apps, Logo</p>

                    <h4>Design Tools :</h4>

                    <div className={styles.list}>

                        <li>Figma</li>
                        <li>Font awesome</li>
                        <li>Balsamiq</li>
                        <li>Framer</li>
                        <li>And ofcourse pen & paper</li>
                    </div>
                  


                </div>

                <div className={styles.card2}>
                    <img className={styles.img1} src='/images/web-programming.png' />
                    <h1 className={styles.head2}> Frontend Developer</h1>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>

                    <h4>Frameworks i use :</h4>
                    <p>Express.js, React, Next.js, Node.js</p>
                    <h4 className={styles.dev}>Dev Tools :</h4>

                    <div className={styles.list2}>

                        <li>VS code</li>
                        <li>Vercel</li>
                        <li>Github</li>
                        <li>Bootstrap</li>
                        <li>Mantine</li>
                    </div>


                </div>
            

            </div>
            <hr className={styles.hrrr} style={{ width: '30%', marginLeft: '34vw' ,marginTop: '5vw' , borderBottom:'none'}} />


        </>
    )


}
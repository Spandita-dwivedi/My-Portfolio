import React, { useEffect, useRef } from 'react'
import styles from "./Vertical.module.scss"


export default function Verticalcomp() {

    return (
        <>

            <div className={styles.cards}>
                <img className={styles.back} src='/images/texture.jpg' />

                {/* <div className={styles.card1}>


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
                */}


                <div className={styles.card1}>

                    <h1 className={styles.head} style={{ fontWeight: '800' }}>DESIGNER</h1>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>


                    <h4 style={{ fontWeight: 'Bolder' }}>Things I enjoy designing :</h4>
                    <p>UI, Web, Apps, Logo</p>

                    <h4 style={{ fontWeight: 'Bolder' }}>Design Tools :</h4>

                    <div style={{ fontWeight: '300' }} className={styles.list}>

                        <li>Figma</li>
                        <li>Font awesome</li>
                        <li>Balsamiq</li>
                        <li>Framer</li>
                        <li>And ofcourse pen & paper</li>
                    </div>



                </div>

                <div className={styles.card12}>
                    <img className={styles.design} src='/images/design.jpg' />
                </div>




            </div>




            <div className={styles.cardss}>
                <img className={styles.backs} src='/images/texture.jpg' />


                

                    <div className={styles.card12s}>
                        <img className={styles.prog} src='/images/prog.jpg' />
                    </div>
                    <div className={styles.card1s}>
                    <h1 className={styles.heads} style={{ fontWeight: '800' }}>FRONTEND DEVELOPER</h1>
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>


                    <h4 style={{ fontWeight: 'Bolder' }}>Frameworks i use :</h4>
                    <p>Express.js, React, Next.js, Node.js</p>

                    <h4 style={{ fontWeight: 'Bolder' }}>Dev Tools :</h4>

                    <div style={{ fontWeight: '300' }} className={styles.list}>

                        <li>VS code</li>
                        <li>Vercel</li>
                        <li>Github</li>
                        <li>Bootstrap</li>
                        <li>Mantine</li>
                    </div>



                </div>






            </div>







        </>
    )


}
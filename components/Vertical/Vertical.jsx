import React, { useEffect, useRef } from 'react'
import styles from "./Vertical.module.scss"


export default function Verticalcomp() {

    return (
        <>
        <div id='vert'>

            <div className={styles.cards} data-aos="fade-up" data-aos-duration="700" >
                <img className={styles.back} data-aos="fade-up" data-aos-duration="700"  src='/images/texture.jpg' />

                {/*  <div className={styles.card1}>


                    <img className={styles.img1} src='/images/graphic-design.png' />
                    <h1 className={styles.head} style={{ fontWeight: 'bolder' }}>Designer</h1>
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>

                    <h4>Things I enjoy designing :</h4>
                    <p>UI, Web, Apps, Logo<700
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


                <div className={styles.card1} data-aos="fade-up" data-aos-duration="700" >

                    <h1 className={styles.head} style={{ fontWeight: '800' }}>Designer</h1>
                    <p data-aos="fade-up" data-aos-duration="700" >I value simple content structure, clean design patterns, and thoughtful interactions.</p>


                    <h4 className={styles.heh} style={{ fontWeight: 'Bolder' }}  data-aos="fade-up" data-aos-duration="700" >Things I enjoy designing :</h4>
                    <p>UI, Web, Apps, Logo</p>

                    <h4 className={styles.heh} style={{ fontWeight: 'Bolder' }}  data-aos="fade-up" data-aos-duration="700" >Design Tools :</h4>

                    <div style={{ fontWeight: '300' }} className={styles.list}  data-aos="fade-up" data-aos-duration="700" >

                        <li>Figma</li>
                        <li>Adobe Illustrator</li>
                        <li>Balsamiq</li>
                        <li>Framer</li>
                        <li>And ofcourse pen & paper</li>
                    </div>



                </div>

                <div className={styles.card12}  data-aos="fade-up" data-aos-duration="700" >
                    <img className={styles.design}  data-aos="fade-up" data-aos-duration="700"  src='/images/design.jpg' />
                </div>




            </div>




            <div className={styles.cardss}  data-aos="fade-up" data-aos-duration="700" >
                <img className={styles.backs}   data-aos="fade-up" data-aos-duration="700" src='/images/texture.jpg' />


                

                    <div className={styles.card12s}  data-aos="fade-up" data-aos-duration="700" >
                        <img className={styles.prog} src='/images/prog.jpg' />
                    </div>
                    <div className={styles.card1s}  data-aos="fade-up" data-aos-duration="700" >
                    <h1 className={styles.heads} style={{ fontWeight: '800' }}>Frontend devoloper</h1>
                    <p  data-aos="fade-up" data-aos-duration="700" >I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>


                    <h4 className={styles.heh} style={{ fontWeight: 'Bolder' }}  data-aos="fade-up" data-aos-duration="700" >Frameworks i use :</h4>
                    <p  data-aos="fade-up" data-aos-duration="700" >Express.js, React, Next.js, Node.js</p>

                    <h4 className={styles.heh} style={{ fontWeight: 'Bolder' }}  data-aos="fade-up" data-aos-duration="700" >Dev Tools :</h4>

                    <div style={{ fontWeight: '300' }}  data-aos="fade-up" data-aos-duration="700"  className={styles.list}>

                        <li>VS code</li>
                        <li>Vercel</li>
                        <li>Github</li>
                        <li>Bootstrap</li>
                        <li>Mantine</li>
                    </div>



                </div>






            </div>




            </div>


        </>
    )


}
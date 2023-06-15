import React from 'react'
import styles from "./Main.module.scss"




export default function Maincomp() {


    
    return (
        <>

       
        <div id='mainn'>

       


            <div className={styles.bg} >
                <video autoPlay muted loop style={{ width: '100%', backgroundSize: 'cover' }}>
                    <source src="/video/my.mp4" media="(min-width: 568px)" />
                   
                  
                </video>
                
                <div className={styles.overlay}>

                    <div className={styles.head}>
                        <h1 className={styles.head1}>
                            hi,
                            <br />i'm spandita.
                        </h1>
                        <p className={styles.head2}>A coder who loves to design.</p>

                        <button className={styles.button6}>Know me more</button>


                    </div>
                </div>

            </div>
            </div>
        </>
    )
}
import React from 'react'
import styles from "./Collab.module.scss"

export default function Verticalcomp(){
    return (
        <>
        <div className={styles.collab}>
            <div className={styles.collab1}>
  
            <h1 className={styles.head} data-aos="fade-right" data-aos-duration="700" >Interested in Collabrating with me?</h1>
            <p className={styles.head1}>Interested in working together? I'm always open to discussing product design work or partnership opportunities</p>
            </div>
            
            <div><button className={styles.button6}>Start a Conversation</button></div>
            {/* <img className={styles.dr} src='/images/message.png' /> */}
        </div>
        
        </>
    )
}
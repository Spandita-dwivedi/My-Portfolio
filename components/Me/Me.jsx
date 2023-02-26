import React from 'react'
import styles from "./Me.module.scss"

export default function Mecomp(){
    return(
        <>
       <div className={styles.cont1}>
      

<img className={styles.photu1} src='/images/beautiful-vintage-flower.jpg' />

        <div className={styles.cont2}>
<h1 className={styles.spandita}>I'm spandita</h1>
<p className={styles.spandita1}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis nam architecto provident odit libero, magni voluptas dolorum praesentium veritatis ab, harum officia quae illum quisquam aspernatur. Nihil impedit quo iure vitae ipsa? Repudiandae laudantium excepturi odit aspernatur, mollitia error!</p>

        </div>

        <div className={styles.cont3}>
            <img className={styles.photu} src='/images/img2.jpg'/>

        </div>


        
       </div>
      
        
        
        </>
    )
}
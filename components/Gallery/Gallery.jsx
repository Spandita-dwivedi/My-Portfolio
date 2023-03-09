import React from 'react'
import styles from "./Gallery.module.scss"










export default function Gallerycomp() {
    return (
        <>
        <div id='gal'>
        <h1 className={styles.head} data-aos="fade-right"  data-aos-duration="2000">
          A Walkway
        </h1>
<div className={styles.row}> 
  <div className={styles.column}>
    <img className={styles.img}  data-aos="flip-left" data-aos-duration="800" src="/images/g-12.png" style={{width:'100%'}}/>
    <img className={styles.img} data-aos="flip-left" data-aos-duration="800" src="/images/g11.png" style={{width:'100%'}}/>
    <img className={styles.img} data-aos="flip-right" data-aos-duration="800" src="/images/G.png" style={{width:'100%'}}/>
    
    
    
  </div>
  <div className={styles.column} >
  <img className={styles.img} data-aos="flip-up" data-aos-duration="800" src="/images/pro5.png" style={{width:'100%'}}/>
    <img className={styles.img} data-aos="flip-up" data-aos-duration="800" src="/images/g-1.png" style={{width:'100%'}}/>
    <img className={styles.img} data-aos="flip-up" data-aos-duration="800" src="/images/pro6.png" style={{width:'100%'}}/>
  </div>
  
  <div className={styles.column}>

  <img className={styles.img} data-aos="flip-right" data-aos-duration="800" src="/images/g10.png" style={{width:'100%'}}/>
    <img className={styles.img} data-aos="flip-right" data-aos-duration="800" src="/images/g-2.png" style={{width:'100%'}}/>

  </div>
  
  
  {/* <div className={styles.column}>
    <img className={styles.img} src="https://images.unsplash.com/photo-1644483878407-f05ff59c8a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1669281151275-1d430c0a3496?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1670087792707-c85cd056bdfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1671390394805-27ad9af270dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1670515258571-29149b266666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1670711454113-a53b85fc53ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={{width:'100%'}}/>
  </div> */}
  
  {/* <div className={styles.column}>
    <img className={styles.img} src="https://images.unsplash.com/photo-1670659556763-33c046412a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1108&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1670614300606-eda33e2146be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1670417098968-8b5cfb1ad009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1670813347701-352337009210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1670960058964-79063a8ecc91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" style={{width:'100%'}}/>
    <img className={styles.img} src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" style={{width:'100%'}}/>
  </div> */}
</div>

<div className={styles.btn1}>
<a style={{textDecoration: 'none'}}href='https://dribbble.com/spandita_d'><button className={styles.button6}><img className={styles.dr} src='/images/dribble.png' />See more on dribble</button></a>
</div>
</div>

</>
)
}

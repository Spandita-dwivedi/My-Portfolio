import React from 'react'
import styles from './Footer.module.scss'

export default function Footercomp() {
    return (
        <>

            <div className={styles.major}>
                <div className={styles.imge1}><img className={styles.img12} src='/images/parallax.png' /> </div>
                <div className={styles.major1}>
                    <h1 className={styles.h}> Made with love ❤️</h1>
                    <p className={styles.para}>Interested in working together? We should queue up a time to chat. I'll buy the coffee.</p>
                </div>
            </div>


        </>
    )
}
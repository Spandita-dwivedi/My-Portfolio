import React from 'react'
import styles from "./About.module.scss"
import { CiLocationOn } from 'react-icons/ci';
import { SlGraduation } from 'react-icons/sl';


export default function Maincomp() {
    return (
        <>
            <div className={styles.main}>
                {/* <div className={styles.container}>


                    <div className={styles.box}>
                        <h1 className={styles.head}>IT'S ME</h1>
                        <p className={styles.head1}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aperiam commodi repellendus dolor dolores quibusdam nihil vero laudantium, libero, sed animi sequi asperiores explicabo blanditiis aliquam magnam sit aspernatur reprehenderit architecto maiores eveniet. Fugit, accusamus cupiditate. Dolores, aut tenetur voluptate excepturi pariatur ea quaerat esse nulla vero corporis necessitatibus delectus eligendi, obcaecati, sed provident magni voluptatem ducimus quos veritatis. Exercitationem.</p>
                    </div>
                    <div className={styles.image}>
                        <img className={styles.img} src="/images/img.jpg"></img>
                    </div>
                </div>
                <div className={styles.iconnav}>
                    <div className={styles.list}>
                        <div className={styles.icon} ><CiLocationOn />  India </div>


                        <div className={styles.icon}><SlGraduation /> Madhav Institute Of Technology & Science   </div>



                    </div>
                </div> */}

                <div className={styles.container2}>
                    <h1 className={styles.head}>MY HARD SKILLS</h1>
                    <div className={styles.mainS}>


                        <div className={styles.skills}>

                            <button className={styles.button6}>Web development</button>
                            <button className={styles.button6}>UI/UX</button>
                            <button className={styles.button6}>App development</button>

                        </div>
                        <div className={styles.skills1}>
                            <button className={styles.button6}>Competitive Programming</button>
                            <button className={styles.button6}>Machine learning</button>
                        </div>


                    </div>





                </div>














            </div>



        </>
    )
}
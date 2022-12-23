import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Maincomp from '../components/Main/Main'
import Navbarcomp from '../components/Navbar/Navbar'
import Aboutcomp from '../components/About/About'
import Projectscomp from '../components/Projects/Projects'
import Gallerycomp from '../components/Gallery/Gallery'


export default function Home() {
  return (
    <>
  <Head>
    <title>Spandita|Portfolio</title>
    <meta name="keywords" content="spandita"/>
  </Head>

    <Navbarcomp />
   <Maincomp/>
   <Aboutcomp/>
   <Projectscomp/>
   <Gallerycomp/>
   
   </>
  )
}

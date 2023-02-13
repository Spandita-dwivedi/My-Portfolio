import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


import Maincomp from '../components/Main/Main'
import Navbarcomp from '../components/Navbar/Navbar'
import Aboutcomp from '../components/About/About'
import Projectscomp from '../components/Projects/Projects'
import Gallerycomp from '../components/Gallery/Gallery'
import Verticalcomp from '../components/Vertical/Vertical'
import Collabcomp from '../components/Collab/Collab'


export default function Home() {
  return (
    <>
  <Head>
    <title>Spandita|Portfolio</title>
    <meta name="keywords" content="spandita"/>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  </Head>
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
    <Navbarcomp />
   <Maincomp/>
   <Aboutcomp/>
   <Projectscomp/>
   <Gallerycomp/>
<Verticalcomp/>
<Collabcomp />
   
   </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Maincomp from '../components/Main/Main'
import Navbarcomp from '../components/Navbar/Navbar'
import Aboutcomp from '../components/About/About'

export default function Home() {
  return (
    <>
    <Navbarcomp />
   <Maincomp/>
   <Aboutcomp/>
   
   </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Maincomp from '../components/Main/Main'
import Navbarcomp from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <>
    <Navbarcomp />
   <Maincomp/>
   </>
  )
}

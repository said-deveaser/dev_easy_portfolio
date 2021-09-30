import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BasicTemplate from "../src/JSX/templates/basic/BasicTemplate";

const Home: NextPage = () => {
  return (
      <BasicTemplate/>
  )
}

export default Home

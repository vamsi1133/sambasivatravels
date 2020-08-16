import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from "../components/Footer/Footer";
import React from "react";

import Cars from "../containers/Cars/Cars";


export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <Cars />
      <footer>
        <Footer />
      </footer>
      <br />
    </React.Fragment>
  )
}

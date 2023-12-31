import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import WithAction from '../components/navbar'
import ProductSimple from '../components/rechargement'
import Abonnement from '../components/abonnement'
import Text1 from '../components/Titre1'
import Text2 from '../components/Titre2'
import Abonnement2 from '../components/rechargement'
import SmallCentered from '../components/footer'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kelly's Topup</title>
        <meta name="description" content="Order your Diamonds " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/logo.png" />
      </Head>
      <main>
       <WithAction/>
       <Text1/>
       <Abonnement2/>
       <Text2/>
       <Abonnement/>
       <SmallCentered/>
      </main>
    </>
  )
}

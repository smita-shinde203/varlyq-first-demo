import Head from 'next/head'
import { Banner } from '../components/Banner'
import { NavBar } from '../components/Navbar/index'
import { About } from '../components/About'
import { Flex } from '@chakra-ui/react'
import { Art } from '../components/ArtGallery/ArtGallery'
import { Roadmap } from '../components/Roadmap'
import { Footer } from '../components/Footer'
import { FAQ } from '../components/FAQ'
import { Card } from '../components/Card'
import { CreateNFT } from '../components/CreateNFT'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex  direction='column' justify='center' align='center' bg='primary' mx='auto' w='100%'>
        <NavBar />
        <Banner />
        <About />
        <Card/>
         <Art />
        {/* <Roadmap /> */}
        <CreateNFT/>
        <FAQ />
        <Footer />  
      </Flex>
      
    </div>
  )
}

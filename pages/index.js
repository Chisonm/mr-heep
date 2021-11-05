import Head from 'next/head'
import About from '../components/About/About'
import HeroSection from '../components/Hero/HeroSection'
import Trade from '../components/Trade/Trade'

export default function Home() {
  return (
    <div>
      <Head>
        <title>home page</title>
      </Head>

      <HeroSection />
      <About />
      <Trade />
    </div>
  )
}

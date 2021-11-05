import Head from 'next/head'
import About from '../components/About/About'
import HeroSection from '../components/Hero/HeroSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>home page</title>
      </Head>

      <HeroSection />
      <About />
    </div>
  )
}

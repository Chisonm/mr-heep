import Head from 'next/head'
import HeroSection from '../components/Hero/HeroSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>home page</title>
      </Head>

      <HeroSection />
    </div>
  )
}

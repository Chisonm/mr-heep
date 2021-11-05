import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import aboutimage from '../../public/aboutmrheep.png'
import Aboutstyles from '../../styles/About.module.css'

function About() {
    return (
    <div className={Aboutstyles.my}>
        <div className={Aboutstyles.container}>
            <div className={Aboutstyles.d_grid}>
                <div className={Aboutstyles.image_div}>
                    <Image src={aboutimage} />
                </div>
                <div className={Aboutstyles.about__content}>
                    <h2>About MR Heep Media</h2>
                    <p>Mr Heep Media start in 2019, we started as a whatsapp Tv.</p>
                    <p className={Aboutstyles.about__lead_text}>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Sed quisque donec integer imperdiet diam gravida sit. In sit vitae eget et nec nisi, gravida. Integer montes, 
                        arcu, eget morbi aliquet tortor in. Pretium lacinia egestas.</p>
                    <Link href="/">Read more</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About

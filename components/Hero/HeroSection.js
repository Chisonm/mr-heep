import React from 'react'
import HeroStyles from '../../styles/Hero.module.css'
import Image from 'next/image'
import heroImage from '../../public/Group 1.png'
import { BiBitcoin } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

function HeroSection() {
    return (
        <div className={HeroStyles.container}>
            <div className={HeroStyles.grid}>
                <div>
                    <h2 className={HeroStyles.hero__header}>Your Clear Choice of Entertainment</h2>
                    <p className={HeroStyles.hero__lead_text}>At Mr Heep media we give you the latest news, memes and so much more.</p>
                    <div className={HeroStyles.d_flex}>
                        <a href="#" className={HeroStyles.whatsapp_btn}><BsWhatsapp size="1.1rem" style={{ marginRight: '5px' }} className={HeroStyles.btn__none} />Whatsapp</a>
                        <a href="#" className={HeroStyles.trade_btn}><BiBitcoin size="1.3rem" style={{ marginRight: '5px' }} className={HeroStyles.btn__none} />Trade with us</a>
                    </div>
                </div>
                <div>
                    <Image src={heroImage} width="100" height="100" layout="responsive" alt="hero" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection

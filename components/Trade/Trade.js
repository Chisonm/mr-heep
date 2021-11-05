import react from 'react'
import Image from 'next/image'
import cryptocircle from '../../public/trademrheep.png'
import bitcoin from '../../public/bitcoin.png'
import creditcard from '../../public/creditcard.png'
import eddfunds from '../../public/eddfund.png'
import paypal from '../../public/paypal.png'
import googlevoice from '../../public/googlevoice.png'
import TradeStyles from '../../styles/Trade.module.css'

const Trade = () => {
    return (
        <div className={TradeStyles.wrapper}>
            <div className={TradeStyles.container}>
                <div className={TradeStyles.section_title}>
                    <h2>TRADE WITH MR HEEP</h2>
                    <p>All types of Giftcards?</p>
                </div>
                <div className={TradeStyles.d_grid}>
                    <div className={TradeStyles.trade_section}>
                        <div className={TradeStyles.coin_section}>
                            <div className={TradeStyles.img_wrapper}>
                            <Image src={bitcoin} height={50} width={50} />
                            </div>
                            <p>BTC & USDT in Bulk & units </p>
                        </div>
                        <div className={TradeStyles.coin_section}>
                            <div className={TradeStyles.img_wrapper}>
                            <Image src={creditcard} height={50} width={50} />
                            </div>
                            <p>Debit cards for spending </p>
                        </div>
                        <div className={TradeStyles.coin_section}>
                            <div className={TradeStyles.img_wrapper}>
                            <Image src={eddfunds} height={50} width={50} />
                            </div>
                            <p>EDD transfer & spending  </p>
                        </div>
                        <div className={TradeStyles.coin_section}>
                            <div className={TradeStyles.img_wrapper}>
                            <Image src={paypal} height={50} width={50} />
                            </div>
                            <p>PayPal funds, Apple Pay, Zelle </p>
                        </div>
                        <div className={TradeStyles.coin_section}>
                            <div className={TradeStyles.img_wrapper}>
                            <Image src={googlevoice} height={50} width={50} />
                            </div>
                            <p>New Google voice for just N2000 </p>
                        </div>
                    </div>
                    <div className={TradeStyles.trade_section}>
                        <Image src={cryptocircle} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade
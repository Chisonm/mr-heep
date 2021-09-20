import Link from 'next/Link'
import { useState } from "react";
import NavStyles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={NavStyles.bg}>
            <div className={NavStyles.container}>
                <div className={NavStyles.d__flex}>
                    <Link href="/">Logo</Link>
                    <ul className={isOpen === false ? NavStyles.navItem__wrapper : NavStyles.navItem__wrapper +' '+ NavStyles.active } onClick={handleClick}>
                       
                        <li className={NavStyles.navItem__links}>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className={NavStyles.navItem__links}>
                            <Link href="/services">Services</Link>
                        </li>
                        <li className={NavStyles.navItem__button, NavStyles.navItem__links}>
                            <Link href="/contact">contact</Link>
                        </li>
                    </ul>

                    <div className={isOpen === false ? NavStyles.menu : NavStyles.menu+' '+NavStyles.active } onClick={handleClick}>
                        <span className={NavStyles.bar}></span>
                        <span className={NavStyles.bar}></span>
                        <span className={NavStyles.bar}></span>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar

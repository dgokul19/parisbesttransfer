"use client";

import { Fragment } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

// CSS
import classes from "../../styles/index.module.scss";

import Logo from "../../assets/Logo-PBT-Black.png";

const NavigationMenu = () => {
    const pathname = usePathname();
    return (
        <Fragment>
            <div className={classes.menuWrapper}>
                <div className={classes.topRow}>
                    <div className={'container flex justify-space-between'}>
                        <ul className={classes.contactDetails}>
                            <li><i className="fa fa-phone"></i> +33 749 394 004</li>
                            <li><i className="fa fa-envelope"></i>info@parisbesttransfer.com</li>
                        </ul>

                        <ul className={classes.socialIcons}>
                            <li><i className="fa fa-whatsapp"></i></li>
                            <li><i className="fa fa-facebook"></i> </li>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-youtube"></i></li>
                        </ul>
                    </div>
                </div>
                <div className={classes.navContainer}>
                    <div className={'container flex justify-space-between'}>
                        <div className={classes.logoElem}>
                            <Link href="/"><Image src={Logo} alt="Paris Best Transfer Logo" /></Link>
                        </div>
                        <div className={classes.navRightElem}>
                            <ul>
                                <li className={`${pathname === '/' ? 'nav-active' : ''}`}><Link href="/">Home</Link></li>
                                <li className={`${pathname === '/booking' ? 'nav-active' : ''}`}><Link href="/booking">Booking</Link></li>
                                <li className={`${pathname === '/services' ? 'nav-active' : ''}`}><Link href="/services">Services</Link></li>
                                <li className={`${pathname === '/testimonial' ? 'nav-active' : ''}`}><Link href="/testimonial">Testimonial</Link></li>
                                <li className={`${pathname === '/faq' ? 'nav-active' : ''}`}><Link href="/faq">Faq</Link></li>
                            </ul>
                        </div>
                        <div className={classes.bookNowElem}>
                            <Link href="/booking">Book a Taxi</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NavigationMenu;
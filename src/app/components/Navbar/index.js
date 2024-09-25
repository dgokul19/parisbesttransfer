import { Fragment } from "react";

import Image from "next/image";
import Link from "next/link";

import classes from "../index.module.scss";

import Logo from "../../assets/PBT-White-Logo-150x224.png";

const NavigationMenu = () => {
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
                            <Image src={Logo} alt="Paris Best Transfer Logo" />
                        </div>
                        <div className={classes.navRightElem}>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/booking">Booking</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/faq">Faq</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className={classes.bookNowElem}>
                            <button>Book a Taxi</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NavigationMenu;
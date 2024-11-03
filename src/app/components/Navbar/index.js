"use client";

import { Fragment, useState, useCallback, useMemo } from "react";

import Image from "next/image";
import { multiLang, Link } from "@/i18n/routing";
import { usePathname } from 'next/navigation';

// Hooks
import useScreenSize from "@/app/hooks/useScreenSize";

// Components
import LanguageSwitcher from "../LanguageSwitcher";

// CSS
import classes from "../../styles/index.module.scss";

// Assets
import Logo from "../../assets/Logo-PBT-Black.png";

const NavigationMenu = ({locale}) => {

    const pathname = usePathname();
    const { isMobile } = useScreenSize();
    
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const renderNavMenu = useMemo(() => {
        if(isMobile){
            if(toggleMobileMenu) {
                return true;
            }
            return false;
        } else {
            return true;
        }
    },[isMobile, toggleMobileMenu]);


    const toggleMobileMenuEvent = useCallback(() => {
        setToggleMobileMenu(!toggleMobileMenu);
    });

    return (
        <Fragment>
            <div className={classes.menuWrapper}>
                <div className={classes.topRow}>
                    <div className={'container flex justify-space-between'}>
                        <ul className={classes.contactDetails}>
                            <li><i className="fa fa-phone"></i> +33 749 394 004</li>
                            <li><i className="fa fa-envelope"></i>info@parisbesttransfer.com</li>
                        </ul>

                        <div className={classes.topRowRightDiv}>
                            <ul className={classes.socialIcons}>
                                <li><i className="fa fa-whatsapp"></i></li>
                                <li><i className="fa fa-facebook"></i> </li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-youtube"></i></li>
                            </ul>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
                <div className={classes.navContainer}>
                    <div className={'container flex justify-space-between'}>
                        <div className={classes.logoElem}>
                            <Link href="/"><Image src={Logo} alt="Paris Best Transfer Logo" /></Link>
                        </div>
                        {renderNavMenu && (<div className={classes.navRightElem}>
                            <ul>
                                <li className={`${pathname === '/' ? 'nav-active' : ''}`}><Link href="/">Home</Link></li>
                                <li className={`${pathname === '/booking' ? 'nav-active' : ''}`}><Link href="/booking">Booking</Link></li>
                                <li className={`${pathname === '/services' ? 'nav-active' : ''}`}><Link href="/services">Services</Link></li>
                                <li className={`${pathname === '/testimonial' ? 'nav-active' : ''}`}><Link href="/testimonial">Testimonial</Link></li>
                                <li className={`${pathname === '/faq' ? 'nav-active' : ''}`}><Link href="/faq">Faq</Link></li>
                                <li className={`${pathname === '/blog' ? 'nav-active' : ''}`}><Link href="/blog">Blog</Link></li>
                                <li className={`${pathname === '/contact' ? 'nav-active' : ''}`}><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>)}
                        
                        {isMobile && (
                            <div className={classes.mobileMenuIcon} onClick={toggleMobileMenuEvent}>
                                {toggleMobileMenu ?  
                                    <i className={"fa fa-close"}></i> : 
                                    <i className={"fa fa-bars"}></i>}
                            </div>
                        )}
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
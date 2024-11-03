import Image from "next/image";
import Link from "next/link";

// CSS
import classes from "../../styles/index.module.scss";

import Logo from "../../assets/Logo-PBT-Black.png";

const FooterComponent = () => {
    return (
        <>
            <div className={classes.footerContainer}>
                <div className="container flex">
                    <div className={classes.footerBx}>
                        <Image src={Logo} alt={`Paris Best Transfer Logo`} />
                        <p>Paris Best Transfer was established in 2016, We have well experienced multilingual and friendly drivers. We provide you luxurious, stress free & safe transfer for an affordable price.</p>
                    </div>
                    <div className={classes.footerBx}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href='/'> Home </Link></li>
                            <li><Link href='/booking'> Booking </Link></li>
                            <li><Link href='/services'> Services </Link></li>
                            <li><Link href='/faq'> Faq </Link></li>
                            <li><Link href='/cancel-booking'> Booking Cancellation </Link></li>
                        </ul>
                    </div>
                    <div className={classes.footerBx}>
                        <h3>Contact us</h3>
                        <ul>
                            <li><i className="fa fa-home"></i><span>Rue Alfred niaudet, 60340 Saint leu d’esserent</span></li>
                            <li><i className="fa fa-phone"></i><span> +33 749 394 004 </span></li>
                            <li><i className="fa fa-envelope"></i><span> info@parisbesttransfer.com </span></li>
                            <li>
                                <ol>
                                    <li><i className="fa fa-youtube"></i></li>
                                    <li><i className="fa fa-whatsapp"></i></li>
                                    <li><i className="fa fa-facebook"></i></li>
                                    <li><i className="fa fa-twitter"></i></li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.footerBx}>
                        <h3>Payment Methods</h3>
                        <ul className={classes.cardPayment}>
                            <li><i className="fa fa-cc-visa"></i></li>
                            <li><i className="fa fa-cc-amex"></i></li>
                            <li><i className="fa fa-cc-mastercard"></i></li>
                        </ul>
                        <p>We also have Pay by Cash to the driver options.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default FooterComponent;

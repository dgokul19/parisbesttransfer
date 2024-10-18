import Link from "next/link";

// CSS
import classes from "../../styles/index.module.scss";

const ParisPackageServices = () => {
    return (
        <>
            <div className={classes.packageServicesLayer}>
                <div className="container flex justify-content-center">
                    <h3>Our Services</h3>
                    <p>Travelling to the most romantic city in the world for a day or few hours ? We provide Paris City Tour package for afforable price</p>

                    <div className={classes.parisPackageSectn}>
                        <div className={classes.packageBx}>
                            <h3>Paris City Tour</h3>
                            <p>Eiffel Tower, The Louvre, Notre Dame de Paris, Arc de triomph, Montmartre, Avenue des champs elysée, Musée d’orsay, Sainte-chapelle</p>
                            <h4><u>Hourly Packages</u></h4>
                            <p>4 Hours Tour</p>
                            <p>6 Hours Tour</p>
                            <p>8 Hours Tour</p>
                            <Link href={'/booking'}>Book Ride</Link>
                        </div>

                        <div className={classes.packageBx}>
                            <h3>Day Trip</h3>
                            <p>80% of our customers likes to visit these monuments</p>
                                <ul>
                                    <li>Normandie</li>
                                    <li>Giverny Gardens</li>
                                    <li>Mont Saint-Michael</li>
                                    <li>Reims Champagne</li>
                                    <li>Rouen, etc..,</li>
                                </ul>
                            {/* <div className={classes.priceElem}>
                                <span>from</span>
                                <label><i className="fa fa-euro"></i> 225</label>
                            </div> */}
                            <Link href={'/booking'}>Book Ride</Link>
                        </div>

                        <div className={classes.packageBx}>
                            <h3>Bus Trip</h3>
                            <p>Our bus services to all destinations in France for less prices, for more information, kindly contact Paris Best Transfer</p>
                            {/* <div className={classes.priceElem}>
                                <span>from</span>
                                <label><i className="fa fa-euro"></i> 400</label>
                            </div> */}
                            <Link href="mailto:info@parisbesttransfer.com">Email us</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ParisPackageServices;
import Image from "next/image";
import Link from "next/link";
// CSS
import classes from "../../styles/index.module.scss";

// ASSET IMAGES
import Fleet1 from "../../assets/fleet-1.jpg";
import Fleet2 from "../../assets/fleet-2.jpg";
import Fleet3 from "../../assets/fleet-3.jpg";
import Fleet4 from "../../assets/fleet-4.jpg";

const FleetComponent = () => {
    return (
        <div className={classes.fleetContainer}>
            <div className="container">
                <div className={classes.titleSection}>
                    <h4> <span className={classes.highighter}></span> LETS GO WITH US</h4>
                    <h3> Choose Vehicles to Ride</h3>
                </div>

                <div className={classes.fleetContent}>
                    <div className={classes.fleetBox}>
                        <div className={classes.fleetImage}>
                            <Image src={Fleet1} alt={`Fleet Type 1 - Comfort SEDAN`}/>
                        </div>
                        <div className={classes.fleetContentBx}>
                            <h4>Comfort Sedan</h4>
                            <p>Affordable and comfortable transportation  in our economic car for your transfer needs. </p>
                            <strong>upto 3 passengers</strong>
                            <Link href='/booking'>Ride Now</Link>
                        </div>
                    </div>

                    <div className={classes.fleetBox}>
                        <div className={classes.fleetImage}>
                            <Image src={Fleet2} alt={`Fleet Type 2 - Business Van`}/>
                        </div>
                        <div className={classes.fleetContentBx}>
                            <h4>Business Van (Caravelle)</h4>
                            <p>Elevate your travel experience with our sleek and professional business van for seamless transfer</p>
                            <strong>upto 8 passengers</strong>
                            <Link href='/booking'>Ride Now</Link>
                        </div>
                    </div>
                    <div className={classes.fleetBox}>
                        <div className={classes.fleetImage}>
                            <Image src={Fleet3} alt={`Fleet Type 3 - Van`}/>
                        </div>
                        <div className={classes.fleetContentBx}>
                            <h4>Business Van (Class V)</h4>
                            <p>Efficient and Budget friendly transfers made easy with our spacious business van</p>
                            <strong>upto 7 passengers</strong>
                            <Link href='/booking'>Ride Now</Link>
                        </div>
                    </div>
                    <div className={classes.fleetBox}>
                        <div className={classes.fleetImage}>
                            <Image src={Fleet4} alt={`Fleet Type 4 - Bus`}/>
                        </div>
                        <div className={classes.fleetContentBx}>
                            <h4>Bus</h4>
                            <p>Experience luxury and convinience with our  high end business bus, perfect for group transfers and executive  travel.</p>
                            <strong>For more info: contact</strong>
                            <a href='mailto:info@parisbesttransfer.com'>Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FleetComponent;
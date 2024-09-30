import Image from "next/image";

// CSS
import classes from "../../styles/index.module.scss";

// image
import TaxiMarker from "../../assets/location-marker.png";
import AboutPic from "../../assets/about_640.jpg";

const AboutSection = () => {
    return (
        <>  
            <div className={classes.aboutSection}>
                <div className="container flex">
                    <div className={classes.leftAbout}>
                        <Image src={AboutPic} alt={'About Image'} />
                        <div className={classes.experincePic}></div>
                        <Image  className={classes.locationmarker} src={TaxiMarker} alt={`Location Marker`} />
                    </div>
                    <div className={classes.rightAbout}>
                        <h4> <span className={classes.highighter}></span>About out Company</h4>
                        <h3> Feel the difference and Relaxation with Us !</h3>
                        <p>We are specialized in airport transportation and take hundreds of happy customers to the airport every day. Safe and sound, for the best price. Or, if you wish so, we can take you from the airport to any destination in The Paris. </p>

                        <div className={classes.contactNo}>
                            <i className="fa fa-user"></i>
                            <span>
                                <p>Call for Taxi</p>
                                <h3> +33 749 394 004 </h3>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default AboutSection;
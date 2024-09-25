import Image from "next/image";

// CSS
import classes from "../index.module.scss";

// Images
import Banner from "../../assets/banner-car-1.png";

const HomeBanner = () => {
    return (
        <>
            <div className={classes.bannerBackground}>
                <div className="container flex relative">
                    <div className={classes.leftBanner}>
                        <h4>Travel securely with us</h4>
                        <h2>Book you Taxi from anywhere today !</h2>
                        <p>24/7 Door to Door Private Transfers between CDG Airport, Orly Airport, Beauvais Airport, Disneyland Paris and Paris city.</p>
                        <span><button>Book Your Ride</button></span>
                    </div>

                    <div className={classes.rightBanner}>
                        <div className={classes.shapeEle}></div>
                        <Image src={Banner} priority={true} alt="Banner Image"/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HomeBanner;
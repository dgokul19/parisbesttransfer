
// CSS
import classes from "../../styles/index.module.scss";

const FeaturesComponent = () => {
    return (
        <>
            <div className={classes.featureContainer}>
                <div className={classes.titleSection}>
                    <h4> Why Choose Us </h4>
                </div>
                <div className="container">
                    <div className={classes.featureBoxContainer}>
                        <div className={classes.featureBx}>
                            <i className={'fa fa-car'}></i>
                            <span>Best Car Selection</span>
                        </div>
                        <div className={classes.featureBx}>
                            <i className={'fa fa-phone'}></i>
                            <span>24/7 Available</span>
                        </div>
                        <div className={classes.featureBx}>
                            <i className={'fa fa-clock-o'}></i>
                            <span>On Time Services</span>
                        </div>
                        <div className={classes.featureBx}>
                            <i className={'fa fa-child'}></i>
                            <span>Free Baby Seats</span>
                        </div>
                        <div className={classes.featureBx}>
                            <i className={'fa fa-id-card'}></i>
                            <span>Professional Driver</span>
                        </div>
                        <div className={classes.featureBx}>
                            <i className={'fa fa-euro'}></i>
                            <span>Reasonable Price</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeaturesComponent;
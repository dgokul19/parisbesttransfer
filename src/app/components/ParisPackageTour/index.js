
import classes from "../../css/index.module.scss";

const ParisPackageServices = () => {
    return (
        <>
            <div className={classes.packageServicesLayer}>
                <div className="container flex justify-content-center">
                    <h3>Paris City Tour</h3>
                    <p>Travelling to the most romantic city in the world for a day or few hours ? We provide Paris City Tour package for afforable price</p>

                    <div className={classes.parisPackageSectn}>
                        <div className={classes.packageBx}>
                            <h3>4 Hours Day Tour</h3>
                            <p>Eiffel Tower, The Louvre, Notre Dame de Paris, Arc de triomph, Montmartre, Avenue des champs elysée, Musée d’orsay, Sainte-chapelle</p>
                            <div className={classes.priceElem}>
                                <span>from</span>
                                <label><i className="fa fa-euro"></i> 200</label>
                            </div>
                            <button>Book Ride</button>
                        </div>

                        <div className={classes.packageBx}>
                            <h3>4 Hours Night Tour</h3>
                            <p>Eiffel Tower, The Louvre, Notre Dame de Paris, Arc de triomph, Montmartre, Avenue des champs elysée, Musée d’orsay, Sainte-chapelle</p>
                            <div className={classes.priceElem}>
                                <span>from</span>
                                <label><i className="fa fa-euro"></i> 225</label>
                            </div>
                            <button>Book Ride</button>
                        </div>

                        <div className={classes.packageBx}>
                            <h3>8 Hours Day Tour</h3>
                            <p>Eiffel Tower, The Louvre, Notre Dame de Paris, Arc de triomph, Montmartre, Avenue des champs elysée, Musée d’orsay, Sainte-chapelle</p>
                            <div className={classes.priceElem}>
                                <span>from</span>
                                <label><i className="fa fa-euro"></i> 400</label>
                            </div>
                            <button>Book Ride</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ParisPackageServices;
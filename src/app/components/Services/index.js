
// Components
import ServiceBox from "./ServiceBox";

// Constants
import { SERVICES_DATA } from "../../constatnts/services";

//CSS
import classes from "../index.module.scss";

const CabServices = () => {
    return (
        <>
            <div className={classes.servicesContainer}>
                <div className={classes.bgLayer}>
                    <div className="container flex justify-content-center">
                        <div className={classes.titleSection}>
                            <h4> <span className={classes.highighter}></span> What we offer</h4>
                            <h3> Start your journey with PBT taxi services !!</h3>
                        </div>

                        <div className={classes.servicesRow}>
                            {
                                SERVICES_DATA.map(list => <ServiceBox list={list}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CabServices;

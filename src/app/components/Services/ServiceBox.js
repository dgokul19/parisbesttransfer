import Image from "next/image";


// CSS
import classes from "../index.module.scss";

const ServiceBox = ({ list }) => {
    // console.log(list);
    return (
        <>
            <div className={classes.servicesBox}>
                <div className={classes.imageBoxElem} style={{backgroundImage : list.bgImage}}>
                </div>
            </div>
        </>
    );
}
 
export default ServiceBox;
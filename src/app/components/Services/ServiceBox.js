import Image from "next/image";


// CSS
import classes from "../../Css/index.module.scss";

// Images
import Taxi from "../../assets/banner-car-1.png";

const ServiceBox = ({list}) => {

    return (
        <>
            <div className={classes.servicesBox}>
                
                <div className={classes.imageBoxElem}>
                    <Image src={list.bgImage} alt={list.title} />
                    <div className={classes.shapeEle}></div>
                    <div className={classes.carContent}>
                        <Image src={Taxi} priority={true} alt={list.title} />
                    </div>
                </div> 
                <div className={classes.serviceBxContent}>
                    <h4>{list.title}</h4>
                    <p>{list.content}</p>
                    <div className={classes.readmore}>Readmore..</div>
                </div>
            </div>
        </>
    );
}
 
export default ServiceBox;
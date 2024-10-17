import Image from "next/image";
import Link from "next/link";

// CSS
import classes from "../../styles/index.module.scss";

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
                    <Link href="/services"className={classes.readmore}>Readmore..</Link>
                </div>
            </div>
        </>
    );
}
 
export default ServiceBox;
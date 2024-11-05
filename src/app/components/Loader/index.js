import { useEffect } from "react";
import Image from "next/image";

// SCSS
import classes from "./index.module.scss";

// Assets
import loadingImage from "../../assets/car-loading.gif";

const LoaderComponent = () => {
    
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    },[])

    return (
        <div className={classes.loaderComponent}>
            <Image src={loadingImage}  alt={`Loading Car Animated`}/>
        </div>
    );
};

export default LoaderComponent;
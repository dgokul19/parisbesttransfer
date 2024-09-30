// CSS
import classes from "../../css/index.module.scss";

const SubBanner = ({title, route}) => {
    return (
        <>
            <div className={classes.subPageBannerBg}>
                <h2>{title}</h2>
                <ul>
                    <li>Home</li>
                    <li><i className="fa fa-angle-right"></i></li>  
                    <li className="nav-active">{route}</li> 
                </ul> 
            </div>
        </>
    );
}
 
export default SubBanner;
// CSS
import classes from "../../styles/index.module.scss";

const SubBanner = ({title, route, subRoute}) => {
    return (
        <>
            <div className={classes.subPageBannerBg}>
                <h2>{title}</h2>
                <ul>
                    <li>Home</li>
                    <li><i className="fa fa-angle-right"></i></li>  
                    <li className="nav-active">{route}</li> 
                    {subRoute && (
                        <>
                            <li><i className="fa fa-angle-right"></i></li>  
                            <li className="nav-active">{subRoute}</li>
                        </>
                    )} 
                </ul> 
            </div>
        </>
    );
}
 
export default SubBanner;
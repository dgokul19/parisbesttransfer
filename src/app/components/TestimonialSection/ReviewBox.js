// CSS
import classes from "../../styles/index.module.scss";

const ReviewBox = ({ content, user, isHomeScreen=false}) => {
    return (
            <div className={`${isHomeScreen ? classes.homeReviewBx : classes.pageReviewBx} ${classes.reviewBox}`}>
                <div className={classes.topIcon}><i className="fa fa-quote-right"></i></div>
                <h3>{user.title}</h3>
                <p>{content}</p>
                <div className={classes.reviewAuth}>
                    <i className="fa fa-user"></i>
                    <div className={classes.reviewAuthor}>
                        <div className={classes.authorRw}>
                            <span>{user.name}</span>
                            <span>{user.date}</span>
                        </div>
                        <span>{user.location || `Paris, France`}</span>
                    </div>
                </div>
            </div>
    );
}

export default ReviewBox;
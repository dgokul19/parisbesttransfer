// CSS
import classes from "../../styles/index.module.scss";

const ReviewBox = ({ content, user }) => {
    return (
            <div className={classes.reviewBox}>
                <div className={classes.topIcon}><i className="fa fa-quote-right"></i></div>
                <p>{content}</p>
                <div className={classes.reviewAuth}>
                    <i className="fa fa-user"></i>
                    <div className={classes.reviewAuthor}>
                        <span>{user.name}</span>
                        <span>{user.location || `Paris, France`}</span>
                    </div>
                </div>
            </div>
    );
}

export default ReviewBox;
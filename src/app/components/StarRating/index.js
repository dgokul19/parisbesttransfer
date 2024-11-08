
// CSS
import classes from "./index.module.scss";

const StarRating = ({ rating }) => {
    return (
        <div className={classes.ratingModule}>
            {
                Array(5).fill('').map((li, idx) => (
                    <span
                        key={`rating-${idx}`}
                        className={`${idx+1 <= rating ? classes.active : null} ${classes.star}`}>
                        &#9733;
                    </span>)
                )
            }
        </div>
    )
};


export default StarRating;
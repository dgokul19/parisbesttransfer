'use client'
import { Carousel } from 'react-responsive-carousel';

// Component
import ReviewBox from "./ReviewBox";

// Hooks
import { useFetchRequest } from "../../hooks/useFetchApi";


// CSS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import classes from "../../styles/index.module.scss";

const TestimonialSection = () => {

    const { data } = useFetchRequest('testimonials');

    const renderFeedbacks = () => {
        return data.map(review => {
            return <ReviewBox key={review.name} isHomeScreen={true} content={review?.content} user={review}/>
        })
    }

    return (
        <>
            <div className={classes.testimonialContainer}>
                <div className="container flex">
                    <div className={classes.testimonialBox}>
                        <div className={classes.titleSection}>
                            <h4> <span className={classes.highighter}></span> CLIENT FEEDBACKS</h4>
                            <h3> Our Passenger Review !!</h3>
                        </div>
                        <div style={{width : '75%', height : '280px'}}>
                            <Carousel autoPlay={true} 
                                showIndicators={false} 
                                showThumbs={false}
                                showArrows={true} 
                                infiniteLoop={true}>
                                {renderFeedbacks()}
                            </Carousel>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <div className={classes.titleSection}>
                            <h4> <span className={classes.highighter}></span> Why Choose Us ?</h4>
                            <p>24/7 Door to Door Private Transfers between CDG Airport, Orly Airport, Beauvais Airport, Disneyland Paris and Paris city.</p>
                        </div>

                        <ul>
                            <li>
                                <i className="fa fa-diamond" aria-hidden="true"></i>
                                <div className={classes.faqContent}>
                                    <h5>Can I complete my reservation, without a credit card? </h5>
                                    <p> During the booking process, you will be allowed to choose the cash payment to the driver, which means you can book without a credit card.</p>
                                </div>
                            </li>

                            <li>
                                <i className="fa fa-car" aria-hidden="true"></i>
                                <div className={classes.faqContent}>
                                    <h5>What meeting time should I choose if I go to the airport? </h5>
                                    <p>We advise you to plan your pickup for  the airport at least 3 hours ahead of your flight departure. </p>
                                </div>
                            </li>

                            <li>
                                <i className="fa fa-euro" aria-hidden="true"></i>
                                <div className={classes.faqContent}>
                                    <h5>Do I have extra charges if the driver needs to wait for me because my flight is delayed? </h5>
                                    <p>Flight delays do not require an additional charges. we will monitor your flight arrival status.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </>
    );
}



export default TestimonialSection;
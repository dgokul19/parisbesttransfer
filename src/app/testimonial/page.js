"use client";
import { useState } from "react";

// Components
import NavigationMenu from "../components/Navbar";
import SubBanner from "../components/SubBanner";

import Services from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import ReviewBox from "../components/TestimonialSection/ReviewBox";

import FooterComponent from "../components/Footer";

import { TESTIMONIAL_FEEDBACKS } from "../constants/testimonial";

// CSS
import classes from "../styles/index.module.scss";

export default function TestimonialComponent() {

  const [feedbacks, setFeedbacks] = useState([...TESTIMONIAL_FEEDBACKS]);

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Our Client Feedbacks'} route={'Testimonial'}/>

        <div className={classes.testimonialContainer}>
          <div className="container flex">
              {feedbacks.map((review,idx) => <ReviewBox key={idx.toString()} content={review.content} user={review.user}/>)}
          </div>
        </div>
        <Services />
        <TestimonialSection />
        <FooterComponent />
    </div>
  );
}

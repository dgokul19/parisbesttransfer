"use client";
import { useState } from "react";

// Components
import NavigationMenu from "../components/Navbar";
import SubBanner from "../components/SubBanner";

import Services from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import ReviewBox from "../components/TestimonialSection/ReviewBox";

import FooterComponent from "../components/Footer";

// Hooks
import { useFetchRequest } from "../hooks/useFetchApi";

// CSS
import classes from "../styles/index.module.scss";

export default function TestimonialComponent() {

  const { data, error, errorMessage } = useFetchRequest('testimonials');

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Our Client Feedbacks'} route={'Testimonial'}/>

        <div className={classes.testimonialContainer}>
          <div className="container flex">
            <div className={classes.pageTestimonial}>
              {data?.length ? data.map((review,idx) => <ReviewBox key={idx.toString()} content={review.content} user={review}/>) : null}
            </div>
              {error && <div className="error-content">Error on loading, Please try again later !!</div>}
          </div>
        </div>
        <Services />
        <TestimonialSection />
        <FooterComponent />
    </div>
  );
}

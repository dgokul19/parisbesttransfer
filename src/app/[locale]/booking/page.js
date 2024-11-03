"use client";
import { useState } from "react";
// Components
import NavigationMenu from "../../components/Navbar";
import SubBanner from "../../components/SubBanner";

import BookingMain from "../../components/Booking/BookingMain";
import CabServices from "../../components/Services";
import TestimonialSection from "../../components/TestimonialSection";
import FooterComponent from "../../components/Footer";

// CSS
import classes from "./page.module.scss";

/* 
  Form Types
    booking_user => User Details
    booking_form => First Page ( Default Page)
*/


export default function BookingPage() {

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Booking'} route={'Booking'}/>
        <BookingMain/>
        <CabServices />
        <TestimonialSection />
        <FooterComponent />
    </div>
  );
}

"use client";
import { useState } from "react";
// Components
import NavigationMenu from "../components/Navbar";
import SubBanner from "../components/SubBanner";

import CabServices from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import FooterComponent from "../components/Footer";
import BookingForm from "../components/Booking/BookingForm";
import BookingDetails from "../components/Booking/BookingDetails";

// CSS
import classes from "./page.module.scss";

/* 
  Form Types
    booking_user => User Details
    booking_form => First Page ( Default Page)
*/


export default function ServicesPage() {
  const [formMode, setFormMode] = useState('booking_form');
  
  const handleFormChange = (formDetails) => {
    setFormMode('booking_user');
  };

  const handleSubmit = (formDetails) => {
    // setFormMode('booking_user');
  };

  const renderFormContent = () => {
    if(formMode === 'booking_user'){
      return <BookingDetails onFormSubmit={handleSubmit}/>
    }
    return <BookingForm onFormSubmit={handleFormChange}/>
  };

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Booking'} route={'Booking'}/>
        <div className={classes.bookingContainer}>
          <div className="container flex justify-content-center">
            {renderFormContent()}
          </div>
        </div>
        <CabServices />
        <TestimonialSection />
        <FooterComponent />
    </div>
  );
}

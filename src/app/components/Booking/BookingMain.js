"use client";
import { useState } from "react";

// Components
import BookingForm from "./BookingForm";
import BookingDetails from "./BookingDetails";

// CSS
import classes from "../../booking/page.module.scss";

/* 
  Form Types
    booking_user => User Details
    booking_form => First Page ( Default Page)
*/


const BookingMain = () => {

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
        <div className={classes.bookingContainer}>
          <div className="container flex justify-content-center">
            {renderFormContent()}
          </div>
        </div>
    );
}
 
export default BookingMain;
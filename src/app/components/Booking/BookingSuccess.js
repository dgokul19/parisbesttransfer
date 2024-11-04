"use client";
import { useEffect, useState } from "react";

// CSS
import classes from "../../styles/booking.module.scss";

const BookingSuccess = ({ successInfo, formMode }) => {

    return (
        <div className={classes.bookingWrapper}>
            <form className={classes.bookingForm}>
                <h3>Book your cab Ride</h3>
                <p>Booking must be done minimum before 8 hours through online booking. For late booking please call our customer care <strong className="nav-active">+33 749 394 004</strong></p>
                <p>Free Cancellation up to 24hrs before the trip.</p>
                <div className={classes.backBtn} onClick={() => formMode('booking_form')}><i className="fa fa-angle-left"></i> Reset</div>

                <div className={`flex-column ${classes.formSuccess}`}>
                    <h3>Your Booking has been confirmed !!</h3>
                    <p>Booking Order Id: <strong>#{successInfo?.booking_reference || 'XXXXXXXX'}</strong></p>
                </div>
            </form>
        </div>
    );
}

export default BookingSuccess;
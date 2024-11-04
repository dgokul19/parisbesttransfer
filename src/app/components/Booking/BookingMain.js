"use client";
import { useEffect, useState } from "react";

// Helper
import { 
  handleDateFormat,
  handleTimeFormat
} from "../../utils/helper";

import { BOOKING_FORM } from "@/app/constants/booking";

// Components
import BookingForm from "./BookingForm";
import BookingDetails from "./BookingDetails";
import BookingSuccess from "./BookingSuccess";

// CSS
import classes from "../../booking/page.module.scss";

/* 
  Form Types
    booking_user => User Details
    booking_form => First Page ( Default Page)
    booking_success => Booking Success Page ( on successfully booking )
*/


const BookingMain = () => {

  const [form, setForm] = useState({ 
    ...BOOKING_FORM, 
    pickup_date : handleDateFormat(),
    pickup_time : handleTimeFormat()
  });

  const [formMode, setFormMode] = useState('booking_form');
  const [locationsOptions, setLocationOptions] = useState([]);
  const [formSuccess, setFormSuccess] = useState({});

  useEffect(() => {
    const fetchRequestApi = async () => {
      try {
        let response = await fetch(`https://api.parisbesttransfer.fr/v1/locations?language=${'en'}`);
        let json = await response.json();
        setLocationOptions(json);
      } catch (ex) {
        console.log('ex', ex);
      }
    };
    fetchRequestApi();
  }, []);

  const onFormSuccessCb = (info) => {
    setFormSuccess(info);
    setForm({ ...BOOKING_FORM, 
      pickup_date : handleDateFormat(),
      pickup_time : handleTimeFormat()
    });
    setFormMode('booking_success');
  };

  const renderFormContent = () => {
    if (formMode === 'booking_user') {
      return <BookingDetails form={form} formHandle={setFormMode} setForm={setForm} onSuccess={onFormSuccessCb}/>
    }else if(formMode === 'booking_success'){
      return <BookingSuccess successInfo={formSuccess} formMode={setFormMode} />
    }
    return <BookingForm form={form} setForm={setForm} locations={locationsOptions} onFormSubmit={setFormMode} />
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
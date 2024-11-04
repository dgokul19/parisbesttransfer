"use client";
import { useMemo, useState, useCallback } from "react";

// Constatnts
import { BOOKING_USER } from "@/app/constants/booking";

// CSS
import classes from "../../styles/booking.module.scss";

const BookingDetails = ({ form, formHandle, onSuccess }) => {

    const [details, setDetails] = useState({ ...BOOKING_USER });

    const handleChange = (e) => {
        let { name, value, checked} = e.target;
        if(['baby_seat', 'booster_seat'].includes(name)){
            value = checked;
        }
        setDetails({
            ...details,
            [name] : value
        });
    };

    const checkDisablityValidation = useMemo(() => {
        let inValid = true;
        const { first_name, last_name, email, phone,  } = details;

        if(first_name && last_name && email && phone) {
            inValid = false;
        }
        return inValid;
    },[details.first_name, details.last_name, details.email, details.phone]);

    const handleSubmit = useCallback(async () => {
        try {
        let params = { 
            ...form,
            ...details,
            from_location : (form.from_location === 'Custom') ? form.custom_from_location : form.from_location,
            to_location : (form.to_location === 'Custom') ? form.custom_to_location : form.to_location,
        };
        delete params.custom_from_location;
        delete params.custom_to_location;
            let response = await fetch('https://api.parisbesttransfer.fr/v1/booking', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            let json = await response.json();
            if (json.success) {
                setDetails({ ...BOOKING_USER });
                onSuccess(json?.data || {});
            } else {
                alert(`Your booking can't be completed at this time, Please book via call/email`)
            }
        } catch(er){
            alert(`Your booking can't be completed at this time, Please book via call/email`);
            alert(`Error: ${er}`);
        }
    },[details])


    return (
        <div className={classes.bookingWrapper}>
            <form className={classes.bookingForm}>
                <h3>Book your cab Ride</h3>
                <p>Booking must be done minimum before 8 hours through online booking. For late booking please call our customer care <strong className="nav-active">+33 749 394 004</strong></p>
                <p>Free Cancellation up to 24hrs before the trip.</p>
                <div className={classes.backBtn} onClick={() => formHandle('booking_form')}><i className="fa fa-angle-left"></i> back</div>

                <div className={`flex-column ${classes.contentForm}`}>
                    <div className={`${classes.formRow}`}>
                        <div className={classes.formGroup}>
                            <input name={'first_name'} placeholder={`First Name`}
                                value={details.first_name}
                                onChange={handleChange} />
                        </div>

                        <div className={classes.formGroup}>
                            <input name={'last_name'} placeholder={`Last Name`}
                                value={details.last_name}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                            <input name={'email'} placeholder={`Email address`}
                                value={details.email}
                                onChange={handleChange} />
                        </div>

                        <div className={classes.formGroup}>
                            <input name={'phone'} placeholder={`Phone Number`}
                                value={details.phone}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                            <input name={'flightNo'} placeholder={`Arrival Flight No:`}
                                value={details.flightNumber}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                            <select name={`luggageCount`} value={details.luggageCount} onChange={handleChange}>
                                <option value=''> Enter Luggage </option>
                                {Array.from(Array(15)).map((v, li) => (<option key={li} value={li+1}>{li+1}</option>))}
                                <option value='15+'> 15+ </option>
                            </select>
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <input name={'baby_seat'} className='css-checkbox' id={'baby_seat'} type="checkbox" value={details.baby_seat} onChange={handleChange} />
                        <label htmlFor="baby_seat">Add Baby Seat (1 Months to 3 Years)</label>
                    </div>

                    <div className={classes.formRow}>
                        <input name={'booster_seat'} className='css-checkbox' id={'booster_seat'} type="checkbox" value={details.booster_seat} onChange={handleChange} />
                        <label htmlFor="booster_seat">Add Booster Seat (3 Years to 6 Years)</label>
                    </div>

                    <div className={classes.formRow}>
                        <div className={`height-auto ${classes.formGroup}`}>
                            <textarea 
                                placeholder={`Enter Special Notes`} 
                                name={`special_notes`}
                                onChange={handleChange}
                                value={details.special_notes}></textarea>
                        </div>
                    </div>

                    <div className={`flex-column ${classes.formRow}`}>
                        <h4 className='text-left'>Payment Options</h4>
                        <ul className={`flex-column ${classes.radioContainer}`}>
                            <li>
                                <label className="radioContainer">Pay Cash to the Driver
                                    <input type="radio" value={`paybycash`} checked={details.payment_option === `paybycash`} name={`payment_option`} onChange={handleChange} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="radioContainer">Pay by Card to the Driver (+5 EUR per way)
                                    <input type="radio" value={`paybycard`} checked={details.payment_option === `paybycard`} name={`payment_option`} onChange={handleChange} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.priceGroup}>
                    <label>Total Fare</label>
                    <span className={classes.rateValue}>{form.rate_charge} <i className="fa fa-euro"></i> ( Tax Included )</span>

                    <div className={classes.submitStyle} disabled={checkDisablityValidation} onClick={() => handleSubmit()}>Confirm Booking</div>
                </div>
            </form>
        </div>
    );
}

export default BookingDetails;
"use client";
import { useMemo, useState } from "react";
// CSS
import classes from "../../styles/booking.module.scss";

const BookingDetails = () => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email : '',
        phone : '',
        flightNo : '',
        luggageCount : 1,
        paymentOption : 'paybycash',
        baby_seat: false,
        booster_seat : false,
        specialNotes: '',
        rateCharge : '0.00'
    });

    const handleChange = (e) => {
        let { name, value, checked} = e.target;
        if(['baby_seat', 'booster_seat'].includes(name)){
            value = checked;
        }
        setForm({
            ...form,
            [name] : value
        });
    };

    const checkDisablityValidation = useMemo(() => {
        let inValid = true;
        const { firstName, lastName, email, phone,  } = form;

        if(firstName && lastName && email && phone) {
            inValid = false;
        }
        return inValid;
    },[form.firstName,form.lastName,form.email,form.phone]);

    const handleSubmit = async () => {
        let params = { ...form };
        console.log({params});
        // let response = await fetch('https://api.parisbesttransfer.fr/v1/booking', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(params)
        //   }).json();
        // let json = await response.json()
    };

    console.log({form});

    return (
        <div className={classes.bookingWrapper}>
            <form className={classes.bookingForm}>
                <h3>Book your cab Ride</h3>
                <p>Booking must be done minimum before 8 hours through online booking. For late booking please call our customer care <strong className="nav-active">+33 749 394 004</strong></p>
                <p>Free Cancellation up to 24hrs before the trip.</p>

                <div className={`flex-column ${classes.contentForm}`}>
                    <div className={`${classes.formRow}`}>
                        <div className={classes.formGroup}>
                            <input name={'firstName'} placeholder={`First Name`}
                                value={form.firstName}
                                onChange={handleChange} />
                        </div>

                        <div className={classes.formGroup}>
                            <input name={'lastName'} placeholder={`Last Name`}
                                value={form.lastName}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                            <input name={'email'} placeholder={`Email address`}
                                value={form.email}
                                onChange={handleChange} />
                        </div>

                        <div className={classes.formGroup}>
                            <input name={'phone'} placeholder={`Phone Number`}
                                value={form.phone}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                            <input name={'flightNo'} placeholder={`Arrival Flight No:`}
                                value={form.flightNumber}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                            <select name={`luggageCount`} value={form.luggageCount} onChange={handleChange}>
                                <option value=''> Enter Luggage </option>
                                {Array.from(Array(15)).map((v, li) => (<option key={li} value={li+1}>{li+1}</option>))}
                                <option value='15+'> 15+ </option>
                            </select>
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <input name={'baby_seat'} className='css-checkbox' id={'baby_seat'} type="checkbox" value={form.baby_seat} onChange={handleChange} />
                        <label htmlFor="baby_seat">Add Baby Seat (1 Months to 3 Years)</label>
                    </div>

                    <div className={classes.formRow}>
                        <input name={'booster_seat'} className='css-checkbox' id={'booster_seat'} type="checkbox" value={form.booster_seat} onChange={handleChange} />
                        <label htmlFor="booster_seat">Add Booster Seat (3 Years to 6 Years)</label>
                    </div>

                    <div className={classes.formRow}>
                        <div className={`height-auto ${classes.formGroup}`}>
                            <textarea 
                                placeholder={`Enter Special Notes`} 
                                name={`specialNotes`}
                                onChange={handleChange}
                                value={form.specialNotes}></textarea>
                        </div>
                    </div>

                    <div className={`flex-column ${classes.formRow}`}>
                        <h4 className='text-left'>Payment Options</h4>
                        <ul className={`flex-column ${classes.radioContainer}`}>
                            <li>
                                <label className="radioContainer">Pay Cash to the Driver
                                    <input type="radio" value={`paybycash`} checked={form.paymentOption === `paybycash`} name={`paymentOption`} onChange={handleChange} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="radioContainer">Pay by Card to the Driver (+5 EUR per way)
                                    <input type="radio" value={`paybycard`} checked={form.paymentOption === `paybycard`} name={`paymentOption`} onChange={handleChange} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.priceGroup}>
                    <label>Total Fare</label>
                    <span className={classes.rateValue}>{form.rateCharge} <i className="fa fa-euro"></i> ( Tax Included )</span>

                    <button className={classes.submitStyle} disabled={checkDisablityValidation} onClick={() => handleSubmit()}>Confirm Booking</button>
                </div>
            </form>
        </div>
    );
}

export default BookingDetails;
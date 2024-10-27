"use client";
import { useState } from "react";

// Components
import Autocomplete from "../Autocomplete";
// CSS
import classes from "../../styles/booking.module.scss";

// Static Options
import {
    TRAVEL_LOCATION,
    optionsList
} from "../../constants/booking";
import { 
    handleDateFormat,
    handleTimeFormat
} from "../../utils/helper";


const BookingForm = ({ onFormSubmit }) => {

    const [ form, setForm ] = useState({
        fromLocation : '',
        toLocation : '',
        pickupDate : handleDateFormat(new Date()),
        pickUpTime : handleTimeFormat(new Date()),
        locationDetails : '',
        passengersCount : '',
        isReturnTransfer : false,
        rateCharge : '0.00',
      });

      const handleTopDropdown = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name] : value
        });
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name] : value
        });
      };

      const renderOptions = (propArray) => {
        return propArray.map(ele => {
            return <option key={ele.value} value={ele.value}>{ele.label}</option>
        })
      };

    return (
        <div className={classes.bookingWrapper}>
            <form className={classes.bookingForm}>
                <h3>Book your cab Ride</h3>
                <p>Booking must be done minimum before 8 hours through online booking. For late booking please call our customer care <strong className="nav-active">+33 749 394 004</strong></p>
                <p>Free Cancellation up to 24hrs before the trip.</p>
                
                {/* Content ****----LEFT----**** Side in the Form */}
                <div className={classes.contentForm}>
                    <div className={classes.contentColumn}>
                        <div className={classes.formRow}>
                            <div className={classes.formGroup}>
                                <Autocomplete
                                    placeholder={`Enter the start destination`}
                                    className={classes.autoComplete}
                                    options={optionsList}>
                                </Autocomplete>
                            </div>
                        </div>

                        <div className={`flex-column ${classes.formRow}`}>
                            <label className={classes.mobileLabel}>Pickup Date</label>
                            <div className={classes.formGroup}>
                                <input placeholder={`PickUp Date`}
                                    name={'pickUpDate'}
                                    type={`date`}
                                    min={handleDateFormat()}
                                    value={form.pickupDate}
                                    onChange={handleChange} />
                                {/* <i className={`fa fa-calendar`}></i> */}
                            </div>
                        </div>

                        <div className={classes.formRow}>
                            <input className='css-checkbox' id={'return_checkBox'} type="checkbox" value={form.isReturnTransfer} onChange={handleChange} />
                            <label htmlFor="return_checkBox">Add Return Transfer</label>
                        </div>
                    </div>
                    {/* Content ****----RIGHT----**** Side in the Form */}
                    <div className={classes.contentColumn}>
                        <div className={classes.formRow}>
                            <div className={classes.formGroup}>
                                <Autocomplete
                                    placeholder={`Enter the to destination`}
                                    className={classes.autoComplete}
                                    options={optionsList}>
                                </Autocomplete>
                            </div>
                        </div>

                        <div className={`flex-column ${classes.formRow}`}>
                            <label className={classes.mobileLabel}>Pickup time</label>
                            <div className={classes.formGroup}>
                                <input name={`pickUpTime`} 
                                    type={`time`}
                                    placeholder={`PickUp Time`}
                                    value={form.pickUpTime}
                                    onChange={handleChange} />
                                <i className={`fa fa-clock-o`}></i>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={classes.formRow}>
                    <div className={classes.formGroup}>
                        <select value={form.passengersCount} onChange={handleChange}>
                            <option value=''>Select the passengers count</option>
                            <option value='1'>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <i className={`fa fa-users`}></i>
                    </div>
                </div>

                <div className={classes.priceGroup}>
                    <label>Total Fare</label>
                    <span className={classes.rateValue}>{form.rateCharge} <i className="fa fa-euro"></i> ( Tax Included )</span>

                    <button className={classes.submitStyle} onClick={() => onFormSubmit(form)}>Book Ride</button>
                </div>
            </form>
        </div>
    );
}

export default BookingForm;
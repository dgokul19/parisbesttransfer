"use client";
import { useCallback, useState } from "react";

// Components
import Autocomplete from "../Autocomplete";
// CSS
import classes from "../../styles/booking.module.scss";

const BookingForm = ({ form, setForm, onFormSubmit, locations }) => {

    const handleTopDropdown = (selection, name) => {
        setForm({
            ...form,
            [name]: selection?.label
        });
    }

    const handleChange = (e) => {
        let { name, value, checked } = e.target;
        if (name === `isReturnTransfer`) {
            value = checked;
        }
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = () => {
        onFormSubmit('booking_user');
    };

    const fetchRateApiMethod = useCallback(async (e) => {
        const { name, value } = e.target || {};
        let formClone = { ...form, [name]: value, trip: {} };
        try {
            let from_location_name, from_location_type, to_location_name, to_location_type;

            if (form.from_location === 'Custom') {
                from_location_name = form.custom_from_location;
                from_location_type = 'custom';
            }

            if (form.to_location === 'Custom') {
                to_location_name = form.custom_to_location;
                to_location_type = 'custom';
            }

            if (form.from_location !== 'Custom' || form.to_location !== 'Custom') {
                locations.forEach(element => {
                    if (element.label !== 'Custom' && element.label === form.from_location) {
                        from_location_name = element.location_name;
                        from_location_type = element.location_type;
                    }
                    if (element.label !== 'Custom' && element.label === form.to_location) {
                        to_location_name = element.location_name;
                        to_location_type = element.location_type;
                    }
                });
            }

            if (from_location_name && to_location_name) {
                let response = await fetch(`https://api.parisbesttransfer.fr/v1/rate?from_location_name=${from_location_name}&to_location_name=${to_location_name}&from_location_type=${from_location_type}&to_location_type=${to_location_type}&passenger_count=${value}`);
                let json = await response.json();
                if (json && json?.rate) {
                    formClone.trip = json;
                    formClone.rate_charge = json?.rate;
                    setForm(formClone);
                } else {
                    setForm(formClone);
                    alert(`System not able to get valid price for given location, Please contact us for exact price`);
                }
            } else {
                setForm(formClone);
            }
        } catch (ex) {
            console.log('ex', ex);
            setForm(formClone);
        }
    }, [form]);


    return (
        <div className={classes.bookingWrapper}>
            <form className={classes.bookingForm}>
                <h3>Book your cab Ride</h3>
                <p>Booking must be done minimum before 8 hours through online booking. For late booking please call our customer care <strong className="nav-active">+33 749 394 004</strong></p>
                <p>Free Cancellation up to 24hrs before the trip.</p>

                {/* Content ****----LEFT----**** Side in the Form */}
                <div className={classes.contentForm}>
                    <div className={classes.contentColumn}>
                        <div className={`flex-column ${classes.formRow}`}>
                            <div className={classes.formGroup}>
                                <Autocomplete
                                    placeholder={`Enter the start destination`}
                                    onChange={handleTopDropdown}
                                    value={form.from_location}
                                    name={`from_location`}
                                    options={locations}>
                                </Autocomplete>
                            </div>
                        </div>

                        {form.from_location === 'Custom' &&
                            <div className={classes.formRow}>
                                <div className={classes.formGroup}>
                                    <input
                                        placeholder={`Enter the pickup location`}
                                        onChange={handleChange}
                                        value={form.custom_from_location}
                                        name={`custom_from_location`}
                                    />
                                </div>
                            </div>}

                        <div className={`flex-column ${classes.formRow}`}>
                            <label className={classes.mobileLabel}>Pickup Date</label>
                            <div className={classes.formGroup}>
                                <input placeholder={`PickUp Date`}
                                    name={'pickup_date'}
                                    type={`date`}
                                    disabled={!form.from_location || !form.to_location}
                                    value={form.pickup_date}
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    {/* Content ****----RIGHT----**** Side in the Form */}
                    <div className={classes.contentColumn}>
                        <div className={`flex-column ${classes.formRow}`}>
                            <div className={classes.formGroup}>
                                <Autocomplete
                                    placeholder={`Enter the end destination`}
                                    onChange={handleTopDropdown}
                                    value={form.to_location}
                                    name={`to_location`}
                                    options={locations}>
                                </Autocomplete>
                            </div>
                        </div>

                        {form.to_location === 'Custom' &&
                            <div className={classes.formRow}>
                                <div className={classes.formGroup}>
                                    <input
                                        placeholder={`Enter the dropoff location`}
                                        onChange={handleChange}
                                        value={form.custom_to_location}
                                        name={`custom_to_location`} />
                                </div>
                            </div>}

                        <div className={`flex-column ${classes.formRow}`}>
                            <label className={classes.mobileLabel}>Pickup time</label>
                            <div className={classes.formGroup}>
                                <input name={`pickup_time`}
                                    type={`time`}
                                    placeholder={`PickUp Time`}
                                    value={form.pickup_time}
                                    disabled={!form.from_location || !form.to_location}
                                    onChange={handleChange} />
                                <i className={`fa fa-clock-o`}></i>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={classes.formRow}>
                    <div className={classes.formGroup}>
                        <select value={form.passengers_count} name={`passengers_count`} onChange={fetchRateApiMethod} disabled={!form?.from_location || !form?.to_location}>
                            <option value=''>Select the passengers count</option>
                            {Array(15).fill(null).map((li, idx) => (<option key={idx} value={idx + 1}>{idx + 1}</option>))}
                        </select>
                        <i className={`fa fa-users`}></i>
                    </div>
                </div>

                <div className={classes.formRow}>
                    <input
                        className='css-checkbox' name={`is_return_transfer`} id={'return_checkBox'} type="checkbox"
                        value={form.is_return_transfer} onChange={handleChange} />
                    <label htmlFor="return_checkBox">Add Return Transfer</label>
                </div>

                <div className={classes.priceGroup}>
                    <label>Total Fare</label>
                    {form.passengers_count && (<label className={classes.rateCallMethod} onClick={() => fetchRateApiMethod({target: {value : form.passengers_count}})}><i className="fa fa-refresh"></i> Get rate </label>)}
                    <span className={classes.rateValue}>{form.rate_charge} <i className="fa fa-euro"></i> ( Tax Included )</span>

                    <button className={classes.submitStyle} disabled={!form.passengers_count} onClick={() => handleSubmit(form)}>Book Ride</button>
                </div>
            </form>
        </div>
    );
}

export default BookingForm;
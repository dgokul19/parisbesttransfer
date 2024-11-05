"use client";
import { useState } from "react";


// CSS
import classes from "./page.module.scss";


const SearchBooking = ({ searchBooking }) => {

    const [form, setForm] = useState({
        reference: '',
        last_name: ''
    });

    const handleChange = (e) => {
        let { name, value } = e.target || {};
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSearch = () => {
        if(form.reference && form.last_name){
            searchBooking(`reference=${form.reference}&lastname=${form.last_name}`);
        } else {
            alert(`Please enter booking reference number & last name..`);
        }
    };

    return (
        <>
            <h3 className='text-center'>Retrieve your bookings details</h3>
            <div className={classes.findBookingsForm}>
                <div className={classes.formEleme}>
                    <input name={`reference`} placeholder={`Enter booking reference number..`} value={form.reference} onChange={handleChange} />
                </div>

                <div className={`${classes.leftBorder} ${classes.formEleme}`}>
                    <input name={`last_name`} placeholder={`Enter last name in the booking `} onChange={handleChange} value={form.last_name} />
                </div>

                <div className={classes.searchIcon} onClick={handleSearch}><i className='fa fa-search'></i></div>
            </div>
        </>
    )
}

export default SearchBooking;
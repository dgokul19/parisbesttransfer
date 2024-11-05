"use client";
import { useState } from "react";

// Static
import { 
    BOOLEAN_FIELDS, 
    BOOKING_LABEL,
    EDITABLE_FIELDS 
} from "../constants/booking";

// CSS
import classes from "./page.module.scss";

const labels = Object.entries(BOOKING_LABEL);

const BookingDetails = ({ uuid, booking }) => {
    const [form, setForm] = useState({...booking });
    // const [isCancelMode, setCancelMode] = useState(false);
    const [isEditMode, setEditMode] = useState(false);

    const handleChange = (e) => {
        let { name, value, checked } = e.target || {}; 
        if(BOOLEAN_FIELDS.includes(name)){
            value = checked;
        }
        setForm({
            ...form,
            [name] : value
        })
    };

    const handleSubmit = async () => {
        try {
            let params = {...form };
            let url = `https://api.parisbesttransfer.fr/v1/booking`;
            if(uuid){
                url = `${url}?uuid=${uuid}`
            } else {
                url = `${url}?reference=${booking.booking_ref}&lastname=${booking.last_name}`
            }
                let response = await fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(params)
                });
                let json = await response.json();
                if (json.success) {
                    setEditMode(false);
                    alert(`Booking Updated Successfully !!`)
                } else {
                    alert(`Booking update failed, Please contact us via call/email`);
                }
            } catch(er){
                alert(`Booking update failed, Please contact us via call/email`);
                alert(`Error: ${er}`);
            }
    };

    const renderContent = (labelKey) => {
        if(isEditMode){ 
            if(EDITABLE_FIELDS.includes(labelKey)){
                if(BOOLEAN_FIELDS.includes(labelKey)){
                    return <input type={`checkbox`} name={labelKey} checked={form[labelKey]} value={form[labelKey]} onChange={handleChange}/>
                }
                return <input name={labelKey} value={form[labelKey] || ''} onChange={handleChange}/>
            }
            return form[labelKey];
        } else {
            if(BOOLEAN_FIELDS.includes(labelKey)){
                return Boolean(form[labelKey]) ? 'Yes' : 'No'
            }
            return form[labelKey];
        }
    };

    return (
        <>
            <div className={classes.booking_option_bar}>
                <h3>Booking Reference <span>{booking.booking_ref}</span></h3>
                <ul>
                    {!isEditMode && <li><button onClick={() => setEditMode(true)}>Edit Booking</button></li>}
                    {isEditMode && <li><button onClick={() => setEditMode(false)}>Cancel Edit</button></li>}
                    <li><button>Cancel Booking</button></li>
                </ul>
            </div>

            <div className={classes.bookedContent}>
                {
                    labels.map((labelTxt) => {
                        return (
                            <div key={labelTxt[0]} className={classes.bookedFormRow}>
                                <div className={classes.labelName}>{labelTxt[1]}</div>
                                <div className={classes.labelValue}>
                                    {renderContent(labelTxt[0])}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            {isEditMode && <div className={classes.submitStyle} onClick={handleSubmit}>Submit</div>}
        </>
    )
}

export default BookingDetails;
"use client";
import { useState } from "react";

// CSS
import classes from "../../styles/booking.module.scss";

// Static Options
import {
    DISNEY_LAND,
    TRAVEL_LOCATION,
    AIRPORT_LIST,
    LOCATION_TYPE,
    TRAIN_STATION,
    PARIS_OPTION,
    DEFAULT_LOCATION_OPTIONS
} from "../../constants/booking";

const { AIRPORT, DISNEY, PARIS, FROM_AIRPORT, AIRPORT_HOTEL } = LOCATION_TYPE;

const BookingForm = ({ onFormSubmit }) => {
    
    const [locationType, setLocationType] = useState({ ...DEFAULT_LOCATION_OPTIONS });
    const [airportField, setAirportField] = useState({ ...DEFAULT_LOCATION_OPTIONS });
    const [selectedTrainStation, setSelectedTrainStation] = useState({ ...DEFAULT_LOCATION_OPTIONS });
    const [selectedParis, setSelectedParisOption] = useState({ ...DEFAULT_LOCATION_OPTIONS });
    const [selectedDisney, setSelectedDisney] = useState({...DEFAULT_LOCATION_OPTIONS});

    const [ form, setForm ] = useState({
        fromLocation : '',
        toLocation : '',
        pickupDate : '',
        pickUpTime : '',
        locationDetails : '',
        passengersCount : 1,
        isReturnTransfer : false,
        rateCharge : '0.00',
      });

      const handleAirportRadio = (e) => {
        setAirportField({
            ...airportField,
            [ e.target.name] : e.target.value
        });
      };
  
      const handlePariseOption = (e) => {
        const { name, value } = e.target;
        console.log({name, value});
        setSelectedParisOption({
            ...selectedParis,
            [name] : value
        });
      };

      const handleDisneySelection = (e) => {
        const { name, value } = e.target;
        setSelectedDisney({
            ...selectedDisney,
            [name] : value
        });
      };

      const handleStationRadio = (e) => {
        const { name, value } = e.target;
        setSelectedTrainStation({
            ...selectedTrainStation,
            [name] : value
        });
      };

      const handleTopDropdown = (e) => {
        const { name, value } = e.target;
        if(AIRPORT_LIST.includes(value)){
            setLocationType({
                ...locationType,
                [name] : AIRPORT
            });
            setSelectedDisney({...DEFAULT_LOCATION_OPTIONS});
            setSelectedParisOption({...DEFAULT_LOCATION_OPTIONS});
        } else if(value === 'Disneyland Paris'){
             setLocationType({
                ...locationType,
                [name] : DISNEY
            });
            setSelectedParisOption({...DEFAULT_LOCATION_OPTIONS});
            setAirportField({...DEFAULT_LOCATION_OPTIONS});
        } else {        //Paris
            setLocationType({
                ...locationType,
                [name] : PARIS
            });
            setAirportField({...DEFAULT_LOCATION_OPTIONS});
            setSelectedParisOption({...DEFAULT_LOCATION_OPTIONS});
        }
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

    const renderLocationFieldOptions = (nameProperty) => {
        if(locationType[nameProperty] === AIRPORT){
            return (
                // AIRPORT LOCATION
                <div className={classes.formRow}>
                    <ul className={classes.radioContainer}>
                        <li>
                            <label className="radioContainer">From Airport
                                <input type="radio" value={FROM_AIRPORT} checked={airportField[nameProperty] === FROM_AIRPORT} name={nameProperty} onChange={handleAirportRadio} />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="radioContainer">From Airport Hotels
                                <input type="radio" value={AIRPORT_HOTEL} checked={airportField[nameProperty] === AIRPORT_HOTEL} name={nameProperty} onChange={handleAirportRadio} />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            )
        } else if(locationType[nameProperty] === DISNEY){
            // DISNEY LOCATION
            return (
                <div className={classes.formRow}>
                    <div className={classes.formGroup}>
                        <select name={nameProperty} value={selectedDisney[nameProperty]} onChange={handleDisneySelection}>
                            <option value=''> Disney pickup location</option>
                            {renderOptions(DISNEY_LAND)}
                        </select>
                    </div>
                </div>
            )
        } else {
            // PARIS LOCATION
            return (
                <div className={classes.formRow}>
                    <ul className={`flex-column height-auto ${classes.radioContainer}`}>
                        {
                            PARIS_OPTION.map(stn => (
                                <li key={stn.label}>
                                    <label className="radioContainer">{stn.label}
                                        <input type="radio" value={stn.label} checked={selectedParis[nameProperty] === stn.label} name={nameProperty} onChange={handlePariseOption} />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    }

    const renderPickUpLocationDetails = (nameProperty) => {
        if(locationType[nameProperty] === AIRPORT && airportField[nameProperty] === AIRPORT_HOTEL){
            return (
                <div className={classes.formRow}>
                    <div className={classes.formGroup}>
                        <input name={nameProperty} placeholder={`Location Details`}
                            value={form.locationDetails}
                            onChange={handleChange} />
                    </div>
                </div>
            )
        } else if (selectedParis[nameProperty] && selectedParis[nameProperty] !== 'From Paris Train Stations'){
            return (
                <div className={classes.formRow}>
                    <div className={classes.formGroup}>
                        <input name={nameProperty} placeholder={`Location Details`}
                            value={form.locationDetails}
                            onChange={handleChange} />
                    </div>
                </div>
            )
        }
        return null;
    };

    const renderParisTrainStation = (nameProperty) => {
        if(selectedParis[nameProperty] === 'From Paris Train Stations'){
            return (
                <div className={`flex-column ${classes.formRow}`}>
                    
                    <h4 className="text-left">Select Paris Train Station: </h4>
                    <ul className={`flex-column height-auto ${classes.radioContainer}`}>
                        {
                            TRAIN_STATION.map(stn => (
                                <li key={stn.value}>
                                    <label className="radioContainer">{stn.label}
                                        <input type="radio" value={stn.value} checked={selectedTrainStation === stn.value} name={nameProperty} onChange={handleStationRadio} />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
        return null;
    }


    console.log({locationType});

    return (
        <div className={classes.bookingWrapper}>
            <form className={classes.bookingForm}>
                <h3>Book your cab Ride</h3>
                <p>Booking must be done minimum before 6 hours through online booking. For late booking please call our customer care <strong className="nav-active">+33 749 394 004</strong></p>

                {/* Content ****----LEFT----**** Side in the Form */}
                <div className={classes.contentForm}>
                    <div className={classes.contentColumn}>
                        <div className={classes.formRow}>
                            <div className={classes.formGroup}>
                                <select name={`fromLocation`} value={form.fromLocation} onChange={handleTopDropdown}>
                                    <option value=''> Please select the start destination </option>
                                    {renderOptions(TRAVEL_LOCATION)}
                                </select>
                                <i className={`fa fa-globe`}></i>
                            </div>
                        </div>

                        {form.fromLocation && renderLocationFieldOptions(`fromLocation`)}
                        {renderPickUpLocationDetails(`fromLocation`)}
                        {renderParisTrainStation(`fromLocation`)}

                        <div className={classes.formRow}>
                            <div className={classes.formGroup}>
                                <input placeholder={`PickUp Date`}
                                    name={'pickUpDate'}
                                    value={form.pickUpTime}
                                    onChange={handleChange} />
                                <i className={`fa fa-calendar`}></i>
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
                                <select name={`toLocation`}  value={form.toLocation} onChange={handleTopDropdown}>
                                    <option value=''> Please select the end destination </option>
                                    {renderOptions(TRAVEL_LOCATION)}
                                </select>
                                <i className={`fa fa-globe`}></i>
                            </div>
                        </div>

                        
                        {form.toLocation && renderLocationFieldOptions(`toLocation`)}
                        {renderPickUpLocationDetails(`toLocation`)}
                        {renderParisTrainStation(`toLocation`)}

                        <div className={classes.formRow}>
                            <div className={classes.formGroup}>
                                <input name={`pickUpTime`} placeholder={`PickUp Time`}
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
                            <option>1</option>
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
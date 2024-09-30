"use client";

import { useState } from "react";

// Components
import NavigationMenu from "../components/Navbar";
import SubBanner from "../components/SubBanner";

import CabServices from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import FooterComponent from "../components/Footer";


import classes from "./page.module.scss";

export default function ServicesPage() {

  const [ form, setForm ] = useState({
    fromLocation : '',
    toLocation : '',
    pickupDate : '',
    pickUpTime : '',
    passengersCount : 1,
    isReturnTransfer : false,
    rateCharge : '0.00'
  });

  const handleChange = () => {

  };

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Booking'} route={'Booking'}/>
        <div className={classes.bookingContainer}>
          <div className="container flex justify-content-center">
            
            <form className={classes.bookingForm}>
                <h3>Book your cab Ride</h3>
                <p>NOTE: The booking must be done minimum before 6 hours through online booking. For late booking please call our customer care <strong className="nav-active">+33 749 394 004</strong></p>

              {/* Content ****----LEFT----**** Side in the Form */}
                <div className={classes.contentForm}>
                  <div className={classes.contentColumn}>
                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                          <input placeholder={`Start Destination`} value={form.fromLocation} onChange={handleChange} />
                          <i className={`fa fa-globe`}></i>
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                          <input placeholder={`PickUp Date`} 
                            value={form.pickUpTime} 
                            onChange={handleChange} />
                          <i className={`fa fa-calendar`}></i>
                        </div>
                    </div>

                    <div className={classes.formRow}>
                      <input className='css-checkbox' id={'return_checkBox'} type="checkbox" value={form.isReturnTransfer} onChange={handleChange}/>
                      <label htmlFor="return_checkBox">Add Return Transfer</label>
                    </div>
                  </div>
                {/* Content ****----RIGHT----**** Side in the Form */}
                  <div className={classes.contentColumn}>
                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                          <input placeholder={`End Destination`} value={form.toLocation} onChange={handleChange} />
                          <i className={`fa fa-globe`}></i>
                        </div>
                    </div>

                    <div className={classes.formRow}>
                        <div className={classes.formGroup}>
                          <input placeholder={`PickUp Time`} 
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
                
                  <button>Book Ride</button>
                </div>
            </form>
          </div>
        </div>
        <CabServices />
        <TestimonialSection />
        <FooterComponent />
    </div>
  );
}

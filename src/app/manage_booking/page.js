"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'

// Components
import NavigationMenu from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import FooterComponent from "../components/Footer";
import SearchBooking from './SearchBooking';
import BookingDetails from './BookingDetails';

// Static
import { BOOKING_MOCK } from "../constants/booking";

// CSS
import classes from "./page.module.scss";

export default function ManageBooking() {
    const searchParams = useSearchParams()
    const uuid = searchParams.get('uuid');

    const [error,  setError] = useState(false);
    const [reference,  setReference] = useState({});
    
    const fetchBookingApi = async (searchUrl) => {
        try {
            let url = `https://api.parisbesttransfer.fr/v1/booking?${searchUrl}`;
           
                let response = await fetch(url);
                let json = await response.json();
                if (json.booking_ref) {
                    setReference(json);
                } else {
                    setError(true);
                    alert(`Not able to get any relevant record, Please try again !!`);
                }
            } catch(er){
                alert(`Something error happened, Please contact us !!`);
                alert(`Error: ${er}`);
            }
    }

    useEffect(() => {
        if(uuid){
            fetchBookingApi(`uuid=${uuid}`);
        }
    },[uuid]);

    return (
        <div className={classes.page}>
            <NavigationMenu />
            <SubBanner title={'Manage Bookings'} route={'Manage Bookings'} />

            <div className={classes.manageContainer}>
                <div className="container flex">
                    {!uuid && <SearchBooking searchBooking={fetchBookingApi}/>}

                    {Object.keys(reference).length ? <BookingDetails uuid={uuid} booking={reference}/> : null}
                    {error && (<h3>Invalid Information provided !!</h3>)}
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

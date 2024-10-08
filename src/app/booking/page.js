

// Components
import NavigationMenu from "../components/Navbar";
import SubBanner from "../components/SubBanner";

import CabServices from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import FooterComponent from "../components/Footer";


import classes from "./page.module.scss";
import BookingForm from "../components/Booking/BookingForm";

export default function ServicesPage() {

  

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Booking'} route={'Booking'}/>
        <div className={classes.bookingContainer}>
          <div className="container flex justify-content-center">
            
            <BookingForm />
          </div>
        </div>
        <CabServices />
        <TestimonialSection />
        <FooterComponent />
    </div>
  );
}

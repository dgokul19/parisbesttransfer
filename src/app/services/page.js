"use client";

// Components
import NavigationMenu from "../components/Navbar";
import SubBanner from "../components/SubBanner";

import ParisPackageServices from "../components/ParisPackageTour";
import CabServices from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import FooterComponent from "../components/Footer";


import classes from "./page.module.scss";

export default function ServicesPage() {

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Services'} route={'Services'}/>
        <ParisPackageServices/>
        <CabServices />
        <TestimonialSection />
        <FooterComponent />
    </div>
  );
}

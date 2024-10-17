
// Components
import NavigationMenu from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import AboutSection from "../components/AboutSection";
import CabServices from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import FeaturesComponent from "../components/WhyChooseUs";
import FleetComponent from "../components/FleetComponent";

import FooterComponent from "../components/Footer";


import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <HomeBanner />
        <FeaturesComponent />
        <AboutSection />
        <FleetComponent />
        <CabServices />
        <TestimonialSection />
        <FooterComponent />
    </div>
  );
}


// Components
import NavigationMenu from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import CabServices from "./components/Services";

// CSS
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <HomeBanner />
        <AboutSection />
        <CabServices />
    </div>
  );
}

"use client";
import { useState } from "react";

// Components
import NavigationMenu from "../../components/Navbar";
import SubBanner from "../../components/SubBanner";

import Services from "../../components/Services";
import TestimonialSection from "../../components/TestimonialSection";
import FooterComponent from "../../components/Footer";

import { BOOKING_PROCESS, BOOKING_TRAVEL } from "../../constants/faq";

// CSS
import classes from "./page.module.scss";

export default function FaqComponent() {

  const [bookProcess, setBookingProcess] = useState([...BOOKING_PROCESS]);
  const [bookTravel, setBookingTravel] = useState([...BOOKING_TRAVEL]);

  const toggleContent = (faqIdx) => {
    let updateContent = [...bookProcess].map((ele, idx) => {
      if(faqIdx === idx){
        ele.isExpanded = ele.isExpanded ? false : true;
      } else {
        ele.isExpanded = false;
      }
      return ele;
    })
    console.log({updateContent});
    
    setBookingProcess(updateContent);
  };

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Frequently Asked Question'} route={'FAQ'}/>

        <div className={classes.faqContainer}>
          <div className="container flex">
              <h3>Booking Process</h3>
              <div className={classes.accordionWrapper}>
                {
                  bookProcess.map((faq, idx) => (
                    <div key={idx} className={classes.accordBox}>
                      <div className={classes.questnElem} onClick={() => toggleContent(idx)}>
                        {faq.ques} 
                        {faq.isExpanded ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-right"></i>}
                      </div>
                      <div className={`${classes.answerElem} ` + `${faq.isExpanded && classes["activeElem"]} `}>{faq.ans}</div>
                    </div>
                  ))
                }
              </div>

              <h3>Before Travelling</h3>
              <div className={classes.accordionWrapper}>
                {
                  bookProcess.map((faq, idx) => (
                    <div key={idx} className={classes.accordBox}>
                      <div className={classes.questnElem} onClick={() => toggleContent(idx)}>
                        {faq.ques} 
                        {faq.isExpanded ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-right"></i>}
                      </div>
                      <div className={`${classes.answerElem} ` + `${faq.isExpanded && classes["activeElem"]} `}>{faq.ans}</div>
                    </div>
                  ))
                }
              </div>

          </div>
        </div>
        <Services />
        <TestimonialSection />
        <FooterComponent />
    </div>
  );
}

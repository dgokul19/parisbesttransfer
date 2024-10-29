"use client";
import { Fragment, useState } from "react";

// Components
import AccorionContent from "./FaqContent";
import NavigationMenu from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import Services from "../components/Services";
import TestimonialSection from "../components/TestimonialSection";
import FooterComponent from "../components/Footer";

import { BOOKING_PROCESS, BOOKING_TRAVEL } from "../constants/faq";

// Hooks
import { useFetchRequest } from "../hooks/useFetchApi";

// CSS
import classes from "./page.module.scss";

export default function FaqComponent() {

  const { data, error, errorMessage } = useFetchRequest('faqs');

  return (
    <div className={classes.page}>
      <NavigationMenu />
      <SubBanner title={'Frequently Asked Question'} route={'FAQ'} />

      <div className={classes.faqContainer}>
        <div className="container flex">
          {
            data.map(faq => (
              <Fragment key={faq.id + Math.random()}>
                <h3>{faq.category}</h3>
                <AccorionContent contentList={faq.questions} />
              </Fragment>
            ))
          }
        </div>
      </div>
      <Services />
      <TestimonialSection />
      <FooterComponent />
    </div>
  );
}

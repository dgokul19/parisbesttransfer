"use client";
import { useState } from "react";

// Components
import NavigationMenu from "../../components/Navbar";
import SubBanner from "../../components/SubBanner";
import FooterComponent from "../../components/Footer";

// CSS
import classes from "./page.module.scss";
import formCss from "../styles/booking.module.scss";

export default function ContactPage() {

  const [ form, setForm ] = useState({
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    message : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name] : value
    })
  };

  const handleSubmit = (e) => {
    const { firstName, lastName, email, phone, message } = form || {};
    if(!firstName && !lastName){
      alert(`Please enter your first name`);
    } else if(!email) {
      alert(`Please enter your email address..`);
    } else if(!phone) {
      alert(`Please enter your phone number..`);
    }

    let params = { ...form };
    console.log({params});
    // let response = await fetch('https://api.parisbesttransfer.fr/v1/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(params)
    //   }).json();
    // let json = await response.json()
  };

  return (
    <div className={classes.page}>
      <NavigationMenu />
      <SubBanner title={'Contact'} route={'Contact'} />
      <div className={classes.contactContainer}>
        <div className="container flex">
          <div className={classes.contactDetails}>
            <h2>Have any questions?</h2>
            <p>Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form.</p>

            <ul>
              <li>
                <i className="fa fa-map-signs"></i>
                <div className={classes.contacText}>
                  <p>Rue Alfred niaudet, 60340 Saint leu d’esserent.</p>
                </div>
              </li>

              <li>
                <i className="fa fa-envelope"></i>
                <div className={classes.contacText}>
                  <p>info@parisbesttransfer.com.</p>
                </div>
              </li>

              <li>
                <i className="fa fa-phone"></i>
                <div className={classes.contacText}>
                  <p>+33 749 394 004</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={classes.contactForm}>
            <h2>Contact with us!</h2>
            <div className={formCss.formRow}>
              <div className={formCss.formGroup}>
                <input placeholder={`First name`}
                  value={form.firstName}
                  name={`firstName`}
                  onChange={handleChange} />
                <i className={`fa fa-user`}></i>
              </div>

              <div className={formCss.formGroup}>
                <input placeholder={`Last name`}
                  value={form.lastName}
                  name={`lastName`}
                  onChange={handleChange} />
                <i className={`fa fa-user`}></i>
              </div>
            </div>

            <div className={formCss.formRow}>
              <div className={formCss.formGroup}>
                <input placeholder={`Email`}
                  value={form.email}
                  name={`email`}
                  onChange={handleChange} />
                <i className={`fa fa-envelope`}></i>
              </div>

              <div className={formCss.formGroup}>
                <input placeholder={`Phone number`}
                  value={form.phone}
                  name={`phone`}
                  onChange={handleChange} />
                <i className={`fa fa-phone`}></i>
              </div>
            </div>

            <div className={formCss.formRow}>
              <div className={`${formCss.formGroup} ${formCss.heightAuto}`}>
                <textarea placeholder={`Message`}
                  value={form.message}
                  name={`message`}
                  onChange={handleChange} />
                <i className={`fa fa-comment`}></i>
              </div>
            </div>

            <button className={formCss.submitStyle} onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

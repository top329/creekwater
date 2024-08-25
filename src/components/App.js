import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner";
import AboutUs from "./section-components/about";
import Outside from "./section-components/Outside";
import Location from "./section-components/Location";
import Inside from "./section-components/Inside";
import ContactForm from "./section-components/contact-form";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <Outside />
      <Inside />
      <Location />
      <ContactForm />
    </div>
  );
};

export default App;

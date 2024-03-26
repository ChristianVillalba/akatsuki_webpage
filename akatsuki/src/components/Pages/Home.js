import React from "react";
import Header from "../Common/Header";
import image from "../assets/img/akatsuki-bg.jpg"
import ServicesList from "../Common/ServicesList";
import Portfolio from "../Common/Portfolio";
import TimeLine from "../Common/TimeLine";
import Contact from "./Contact";

function Home(props) {
  // Any logic or state management can go here

  return (
    <div>
      <Header
        title="Failure is not an option!"
        subtitle="Akatsuki"
        buttonText="Tell me more"
        link="/services"
        showButton={true}
        image={image}
      />
      <ServicesList />
      <Portfolio />
      <TimeLine />
      <Contact />
    </div>
  );
}

export default Home;

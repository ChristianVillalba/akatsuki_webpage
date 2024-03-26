import React from "react";
import ServicesList from "./ServicesList";
import Header from "./Header";
import image from "../assets/img/services.jpg";

const Services = () => {
  return (
    <div>
      <Header
        title="It is because we love that we sacrifice...and hate."
        subtitle="Services"
        showButton={false}
        image={image}
      />
      <ServicesList />
    </div>
  );
};

export default Services;

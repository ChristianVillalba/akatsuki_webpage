import React from "react";
import ServiceItem from "./ServiceItem";

const servicesOffered = [
  {
    title: "Assassin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-crosshairs",
  },
  {
    title: "Spy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-binoculars",
  },
  {
    title: "Safeguard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    icon: "fa-shield-alt",
  },
];

const ServicesList = (props) => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center"></div>
        <div className="row text-center">
          {/* Maping ServiceItem Components */}
          {servicesOffered.map((service, index) => {
            return (
              <ServiceItem
                {...service}
                key={index}
                // equals to:
                // title={servicesOffered.title}
                // description={servicesOffered.description}
                // icon={servicesOffered.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

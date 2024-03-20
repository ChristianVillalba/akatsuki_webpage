import React from 'react';
import SingleService from './SingleService';

const servicesOffered = [
    {title: "Assassin", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", 
    icon: "fa-crosshairs"},
    {title: "Spy", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", 
    icon: "fa-binoculars"},
    {title: "Safeguard", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.", 
    icon: "fa-shield-alt"},
]

const Services = () => {
  return (
    <div>
      <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <SingleService />
            </div>
        </section>
    </div>
  );
};

export default Services;

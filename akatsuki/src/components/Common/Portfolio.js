import React from "react";
import PortfolioItem from "./PortfolioItem";
import img1 from "../assets/img/portfolio/01-full.jpg";
import img2 from "../assets/img/portfolio/02-full.jpg";
import img3 from "../assets/img/portfolio/03-full.jpg";
import img4 from "../assets/img/portfolio/04-full.jpg";
import img5 from "../assets/img/portfolio/05-full.jpg";
import img6 from "../assets/img/portfolio/06-full.jpg";

const portfolioList = [
    { title: "Mission", subtitle: "Organization Success", img: img1 },
    { title: "Mission", subtitle: "Organization Success", img: img2 },
    { title: "Mission", subtitle: "Organization Success", img: img3 },
    { title: "Mission", subtitle: "Organization Success", img: img4 },
    { title: "Mission", subtitle: "Organization Success", img: img5 },
    { title: "Mission", subtitle: "Organization Success", img: img6 },
];

const Portfolio = () => {

  return (
    <div>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Achivemenents</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {portfolioList.map((item, index) => {
              return (
                <PortfolioItem
                  {...item}
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
    </div>
  );
};

export default Portfolio;

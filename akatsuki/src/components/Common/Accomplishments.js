import React from 'react';
import AccomplishmentItem from './AccomplishmentItem';

// /images
// akatsuki\src\components\assets\img\portfolio\01-full.jpg
// akatsuki\src\components\Common\Accomplishments.js
import img1 from "/../assets/img/porfolio/01-full.jpg";


const portfolio = [
    {title: "Threads" , subtitle: "Illustration", img: img1},
    {title: "Threads" , subtitle: "Illustration", img: ""},
    {title: "Threads" , subtitle: "Illustration", img: ""},
];

const Accomplishments = () => {
  return (
    <div className="container">
        <section className="page-section bg-light" id="accomplishments">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Accomplishments</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {portfolio.map((item, index) => (
                        <AccomplishmentItem
                            {...item}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </section>

    </div>
  );
};

export default Accomplishments;

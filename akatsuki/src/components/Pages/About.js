import React from 'react';
import Header from '../Common/Header';
import image from "../assets/img/about.jpg";
import TimeLine from '../Common/TimeLine';


function About(props) {
  
  return (
    <div >
        <Header 
              title="About Us"
              subtitle="We are Akatsuki"
              showButton={false}
              image={image}
            />
        <TimeLine />
            
      
    </div>
  );
}

export default About;
import React from "react";
import Header from "../Common/Header";
import image from "../assets/img/akatsuki-bg.jpg"

const Home = (props) => (
  <div>
    <Header
      title="Failure is not an option!"
      subtitle="Akatsuki"
      buttonText="Tell me more"
      link="/services"
      showButton={true}
      image={image}
    />
  </div>
);

export default Home;

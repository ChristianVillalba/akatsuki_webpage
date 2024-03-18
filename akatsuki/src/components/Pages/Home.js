import React from "react";
import Header from "../Common/Header";
import image from "../assets/img/akatsuki-bg.jpg"

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
    </div>
  );
}

export default Home;

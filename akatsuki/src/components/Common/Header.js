import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { image, title, subtitle, showButton, link, buttonText } = props;

  return (
    <header className="masthead" style={{backgroundImage: `url(${image})` }}>
     {/* <header className="masthead" style={{backgroundImage: `url(${this.props.image})` }}> */}
      <div className="container">
        <div className="intro-text">
          <div className="masthead-subheading">{title}</div>
          <div className="masthead-heading text-uppercase">{subtitle}</div>
          {showButton && 
            <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={link}>{buttonText}</Link>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;

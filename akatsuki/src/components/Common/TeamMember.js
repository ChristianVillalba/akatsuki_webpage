import React from "react";

const TeamMember = ( props ) => {
  const { name, power, image } = props;
  return (
    <div className="col-sm-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src={image} alt=""/>
          <h4>{name}</h4>
          <p className="text-muted">{power}</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://www.google.com/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.google.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.google.com/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default TeamMember;
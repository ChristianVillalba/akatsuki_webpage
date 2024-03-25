import React from "react";

const AccomplishmentItem = (props) => {
    const { heading, subheading, img } = props;

  return (
    <div>
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="accomplishments-item">
          <a
            className="accomplishments-link"
            data-toggle="modal"
            href="#accomplishmentsModal1"
          >
            <div className="accomplishments-hover">
              <div className="accomplishments-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              className="img-fluid"
            //   edit this for images
              src={img}
              alt=""
            />
          </a>
          <div className="accomplishments-caption">
            <div className="accomplishments-caption-heading">{heading}</div>
            <div className="accomplishments-caption-subheading text-muted">
              {subheading}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccomplishmentItem;

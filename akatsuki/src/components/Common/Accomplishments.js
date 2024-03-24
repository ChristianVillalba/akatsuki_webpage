import React from 'react';

const Accomplishments = () => {
  return (
    <div className="container">
    {/* Accomplishments Grid */}
        <section className="page-section bg-light" id="accomplishments">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Accomplishments</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="accomplishments-item">
                            <a className="accomplishments-link" data-toggle="modal" href="#accomplishmentsModal1">
                                <div className="accomplishments-hover">
                                    <div className="accomplishments-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/accomplishments/01-thumbnail.jpg" alt="" />
                            </a>
                            <div className="accomplishments-caption">
                                <div className="accomplishments-caption-heading">Threads</div>
                                <div className="accomplishments-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="accomplishments-item">
                            <a className="accomplishments-link" data-toggle="modal" href="#accomplishmentsModal2">
                                <div className="accomplishments-hover">
                                    <div className="accomplishments-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/accomplishments/02-thumbnail.jpg" alt="" />
                            </a>
                            <div className="accomplishments-caption">
                                <div className="accomplishments-caption-heading">Explore</div>
                                <div className="accomplishments-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="accomplishments-item">
                            <a className="accomplishments-link" data-toggle="modal" href="#accomplishmentsModal3">
                                <div className="accomplishments-hover">
                                    <div className="accomplishments-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/accomplishments/03-thumbnail.jpg" alt="" />
                            </a>
                            <div className="accomplishments-caption">
                                <div className="accomplishments-caption-heading">Finish</div>
                                <div className="accomplishments-caption-subheading text-muted">Identity</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="accomplishments-item">
                            <a className="accomplishments-link" data-toggle="modal" href="#accomplishmentsModal4">
                                <div className="accomplishments-hover">
                                    <div className="accomplishments-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/accomplishments/04-thumbnail.jpg" alt="" />
                            </a>
                            <div className="accomplishments-caption">
                                <div className="accomplishments-caption-heading">Lines</div>
                                <div className="accomplishments-caption-subheading text-muted">Branding</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div className="accomplishments-item">
                            <a className="accomplishments-link" data-toggle="modal" href="#accomplishmentsModal5">
                                <div className="accomplishments-hover">
                                    <div className="accomplishments-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/accomplishments/05-thumbnail.jpg" alt="" />
                            </a>
                            <div className="accomplishments-caption">
                                <div className="accomplishments-caption-heading">Southwest</div>
                                <div className="accomplishments-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="accomplishments-item">
                            <a className="accomplishments-link" data-toggle="modal" href="#accomplishmentsModal6">
                                <div className="accomplishments-hover">
                                    <div className="accomplishments-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/accomplishments/06-thumbnail.jpg" alt="" />
                            </a>
                            <div className="accomplishments-caption">
                                <div className="accomplishments-caption-heading">Window</div>
                                <div className="accomplishments-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
};

export default Accomplishments;

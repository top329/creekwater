import React, { Component } from "react";
import { Link } from "react-scroll";

class UpcomingProductV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65"
        data-bs-bg={publicUrl + "assets/img/bg/2.jpg"}
        id="outside"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center---">
                <h4 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">
                  OutSide
                </h4>
                <h1 className="section-title  white-color">
                  Elevating the Definition of Luxury Living
                </h1>
              </div>
            </div>
          </div>
          <div className="row ltn__upcoming-project-slider-1-active slick-arrow-3">
            {/* upcoming-project-item */}
            <div className="col-lg-12">
              <div className="ltn__upcoming-project-item">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="ltn__upcoming-project-img">
                      <img
                        src={publicUrl + "assets/img/outside/1.jpg"}
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 section-bg-1">
                    <div className="ltn__upcoming-project-info ltn__menu-widget">
                      <h1 className="mb-30">Sparkling Inifinity Pool</h1>
                      <ul className="mt">
                        <li>
                          Residents will also enjoy the sparkling infinity pool
                          blending into the blue of the sky, viewing decks
                          strategically situated to enjoy the best views Dubai
                          Creek Harbour has to offer, a kids’ pool with a shaded
                          play area and innovative features.
                        </li>
                      </ul>
                      <div className="btn-wrapper animated go-top">
                        <Link
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__upcoming-project-item">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="ltn__upcoming-project-img">
                      <img
                        src={publicUrl + "assets/img/outside/2.jpg"}
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 section-bg-1">
                    <div className="ltn__upcoming-project-info ltn__menu-widget">
                      <h1 className="mb-30">
                        State-of-the-art Park at Your Doorstep
                      </h1>
                      <ul className="mt">
                        <li>
                          The park has been tastefully manicured, with plenty of
                          trees and plants, as well as shaded paths and a
                          vibrant design that runs in parallel to the
                          promenade's winding route.
                        </li>
                      </ul>
                      <div className="btn-wrapper animated go-top">
                        <Link
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__upcoming-project-item">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="ltn__upcoming-project-img">
                      <img
                        src={publicUrl + "assets/img/outside/3.jpg"}
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 section-bg-1">
                    <div className="ltn__upcoming-project-info ltn__menu-widget">
                      <h1 className="mb-30">
                        A Fine Example of Modern Building Design
                      </h1>
                      <ul>
                        <li>
                          Splendid architectural marvel that
                          incorporates the principles of urbanist architecture
                          and the most exquisite features of contemporary
                          building design.
                        </li>
                      </ul>
                      <div className="btn-wrapper animated go-top">
                        <Link
                          activeClass="active"
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    );
  }
}

export default UpcomingProductV1;

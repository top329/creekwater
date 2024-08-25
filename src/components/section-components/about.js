/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

class AboutV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__about-us-area pt-115 pb-100" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img
                  src={publicUrl + "assets/img/others/1.png"}
                  alt="About Us Image"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">Creek Island</h1>
                  <p>
                    The Island District is a waterfront development that mixes
                    upscale residences with enticing leisure and recreational
                    amenities to create a world-class community.{" "}
                  </p>
                </div>
                <div className="ltn__feature-item ltn__feature-item-3">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="icon-view" />
                    </span>
                  </div>
                  <div className="ltn__feature-info">
                    <h4>Breathtaking Sunset Views</h4>
                  </div>
                </div>
                <div className="ltn__feature-item ltn__feature-item-3">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="icon-seat" />
                    </span>
                  </div>
                  <div className="ltn__feature-info">
                    <h4>5 Min from Creek Marina Yacht Club</h4>
                  </div>
                </div>
                <div className="ltn__feature-item ltn__feature-item-3">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="flaticon-apartment" />
                    </span>
                  </div>
                  <div className="ltn__feature-info">
                    <h4>Licensed Bars & Restaurants</h4>
                  </div>
                </div>
                <div className="ltn__feature-item ltn__feature-item-3">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="flaticon-apartment-1" />
                    </span>
                  </div>
                  <div className="ltn__feature-info">
                    <h4>5-Star Hotels</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutV3;

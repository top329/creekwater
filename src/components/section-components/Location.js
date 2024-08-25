import React, { Component } from "react";

class Location extends Component {
  render() {
    let CustomClass = this.props.customClass ? this.props.customClass : "";

    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        className={"ltn__apartments-plan-area pt-115--- pb-70 " + CustomClass}
      id="location">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h4 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  Location
                </h4>
                <h1 className="section-title">
                  Utmost Convenience & Connectivity
                </h1>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_tab_3_2">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                          {/* <h2>Deluxe Portion</h2> */}
                          <p>
                            Creek Waters 2 sits at the centre of a bustling
                            district that, once completed, will offer all the
                            modern conveniences and amenities that you need,
                            including premier schools, lifestyle and
                            entertainment destinations, and easy access to
                            transport routes leading to the rest of Dubai.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>4 Metro Stations</label>
                              </li>
                              <li>
                                <label>A Convenient Interchange</label>
                              </li>
                              <li>
                                <label>Water Taxis to Downtown Dubai</label>
                              </li>
                              <li>
                                <label>
                                  3 Bridges Connecting to Dubai Creek Harbour
                                </label>
                              </li>
                              <li>
                                <label>
                                  A Panoramic Pedestrain Bridge to the Island
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "assets/img/others/10.png"} alt="#"
                          />
                        </div>
                      </div>
                    </div>
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

export default Location;

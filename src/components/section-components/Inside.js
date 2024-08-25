import React, { Component } from "react";
import { Link } from "react-router-dom";

class Neighbour extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="neighbour-area section-bg-1 pt-118 pb-120" id="inside">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center---">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  InSide
                </h6>
                <h1 className="section-title">
                  A Story of Glamour & Unrivalled Scenery Explore Below
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__neighbour-tab-wrap">
                <div className="ltn__tab-menu ltn__tab-menu-3--- ltn__tab-menu-4 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                  <div className="nav">
                    <a
                      className="active show"
                      data-bs-toggle="tab"
                      href="#liton_tab_4_1"
                    >
                      <img
                        src={publicUrl + "assets/img/inside/1.jpg"}
                        alt="#"
                      />
                    </a>
                    <a data-bs-toggle="tab" href="#liton_tab_4_2">
                      <img
                        src={publicUrl + "assets/img/inside/2.jpg"}
                        alt="#"
                      />
                    </a>
                    <a data-bs-toggle="tab" href="#liton_tab_4_3">
                      <img
                        src={publicUrl + "assets/img/inside/3.jpg"}
                        alt="#"
                      />
                    </a>
                    <a data-bs-toggle="tab" href="#liton_tab_4_4">
                      <img
                        src={publicUrl + "assets/img/inside/4.jpg"}
                        alt="#"
                      />
                    </a>
                    <a data-bs-toggle="tab" href="#liton_tab_4_5">
                      <img
                        src={publicUrl + "assets/img/inside/5.jpg"}
                        alt="#"
                      />
                    </a>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="liton_tab_4_1">
                    <div className="ltn__neighbour-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="neighbour-apartments-img">
                            <img
                              src={publicUrl + "assets/img/inside/1.jpg"}
                              alt="#"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="ltn__search-by-place-item neighbour-apartments-item">
                            <div className="search-by-place-img">
                              <Link to="/product-details">
                                <img
                                  src={publicUrl + "assets/img/outside/3.jpg"}
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="search-by-place-info go-top">
                              <h4>
                                <Link to="/product-details">
                                  Modern Building Design
                                </Link>
                              </h4>

                              <div className="search-by-place-brief">
                                <p>
                                  The lush and natural landscaping of the
                                  amenities platform beautifully balances the
                                  sleek and structured urban design. The tower's
                                  remarkable yet unassuming appearance exudes
                                  sophistication and grandeur.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_4_2">
                    <div className="ltn__neighbour-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="neighbour-apartments-img">
                            <img
                              src={publicUrl + "assets/img/inside/2.jpg"}
                              alt="#"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="ltn__search-by-place-item neighbour-apartments-item">
                            <div className="search-by-place-img">
                              <Link to="/product-details">
                                <img
                                  src={publicUrl + "assets/img/outside/2.jpg"}
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="search-by-place-info go-top">
                              <h4>
                                <Link to="/product-details">
                                  State-of-the-art Park at Your Doorstep
                                </Link>
                              </h4>

                              <div className="search-by-place-brief">
                                <p>
                                  Located directly at their doorstep, residents
                                  of Creek Waters 2 can enjoy an active
                                  lifestyle at Creekside Park, a
                                  pedestrianfriendly linear park boasting a
                                  variety of amenities, including playgrounds,
                                  fitness centres.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_4_3">
                    <div className="ltn__neighbour-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="neighbour-apartments-img">
                            <img
                              src={publicUrl + "assets/img/inside/3.jpg"}
                              alt="#"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="ltn__search-by-place-item neighbour-apartments-item">
                            <div className="search-by-place-img">
                              <Link to="/product-details">
                                <img
                                  src={publicUrl + "assets/img/outside/4.jpg"}
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="search-by-place-info go-top">
                              <h4>
                                <Link to="/product-details">
                                  A Sense of Prestige & Exclusivity
                                </Link>
                              </h4>

                              <div className="search-by-place-brief">
                                <p>
                                  The landscaped amenities podium at Creek
                                  Waters 2 is meticulously designed to evoke the
                                  exclusivity of a private sanctuary, complete
                                  with a plethora of amenities, leisure
                                  activities, and recreational facilities to
                                  enjoy.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_4_4">
                    <div className="ltn__neighbour-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="neighbour-apartments-img">
                            <img
                              src={publicUrl + "assets/img/inside/4.jpg"}
                              alt="#"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="ltn__search-by-place-item neighbour-apartments-item">
                            <div className="search-by-place-img">
                              <Link to="/product-details">
                                <img
                                  src={publicUrl + "assets/img/outside/5.jpg"}
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="search-by-place-info go-top">
                              <h4>
                                <Link to="/product-details">
                                  Fully-Equipped Gym
                                </Link>
                              </h4>

                              <div className="search-by-place-brief">
                                <p>
                                  The fully-equipped gym, located in a separate
                                  pavilion, opening up to an outdoor yoga deck,
                                  is a great addition to the overall fitness and
                                  recreation experience.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_4_5">
                    <div className="ltn__neighbour-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="neighbour-apartments-img">
                            <img
                              src={publicUrl + "assets/img/inside/5.jpg"}
                              alt="#"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="ltn__search-by-place-item neighbour-apartments-item">
                            <div className="search-by-place-img">
                              <Link to="/product-details">
                                <img
                                  src={publicUrl + "assets/img/outside/1.jpg"}
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="search-by-place-info go-top">
                              <h4>
                                <Link to="/product-details">
                                  Sparkling Inifinity Pool
                                </Link>
                              </h4>

                              <div className="search-by-place-brief">
                                <p>
                                  Residents will also enjoy the sparkling
                                  infinity pool blending into the blue of the
                                  sky, viewing decks strategically situated to
                                  enjoy the best views Dubai Creek Harbour has
                                  to offer, a kids' pool with a shaded play area
                                  and innovative features.
                                </p>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Neighbour;

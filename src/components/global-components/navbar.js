/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from "react";
import { Link } from "react-scroll";

class NavbarV3 extends Component {
  
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <div>
        <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
          <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="main-header__contact">
                    <div
                      className="main-header__phone-mob event_call text-white"
                      data-gtag-click="phone_call"
                    >
                      <a href="tel:+971567916912">
                        <img src="assets/img/icons/wp.png" width={29} height={29}></img>
                        +971567916912
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col header-menu-column menu-color-white">
                  <div className="header-menu d-none d-xl-block go-top">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>
                          <li>
                            <Link to="#">HOME</Link>
                          </li>
                          <li className="menu-icon">
                            <Link
                              activeClass="active"
                              to="about"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >
                              ABOUTUS
                            </Link>
                            <ul>
                              <li>
                                <Link
                                  activeClass="active"
                                  to="about"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                >
                                  CREEK ISLAND
                                </Link>
                              </li>
                              <li>
                                <Link
                                  activeClass="active"
                                  to="outside"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                >
                                  OUTSIDE
                                </Link>
                              </li>
                              <li>
                                <Link
                                  activeClass="active"
                                  to="inside"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                >
                                  INSIDE
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              activeClass="active"
                              to="location"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >
                              LOCATION
                            </Link>
                          </li>
                          <li>
                            <Link
                              activeClass="active"
                              to="contact"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >
                              CONTACT
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col--- ltn__header-options ltn__header-options-2 ">
                  {/* Mobile Menu Button */}
                  <div className="mobile-menu-toggle d-xl-none">
                    <a
                      href="#ltn__utilize-mobile-menu"
                      className="ltn__utilize-toggle"
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/">
                  <img src={publicUrl + "assets/img/favicon.png"} alt="Logo" />
                </Link>
              </div>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
              <form action={"#"}>
                <input type="text" placeholder="Search..." />
                <button>
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            <div className="ltn__utilize-menu">
              <ul>
                <li>
                  <Link to="#">HOME</Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    ABOUTUS
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        CREEK ISLAND
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="outside"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        OUTSIDE
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="inside"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        INSIDE
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="location"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    LOCATION
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarV3;

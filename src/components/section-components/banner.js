import React, { Component } from "react";
import { Link } from "react-scroll";

class Banner extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__slider-area ltn__slider-3  section-bg-2">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
            data-bs-bg={publicUrl + "assets/img/banner/1.jpg"}
          >
            <div className="ltn__slide-item-inner text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div>
                      <div className="ltn__slide-animation">
                        <h4 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          Real Estate Agency
                        </h4>
                        <h1 className="animated fa-5x">CREEK WATERS 2</h1>
                        <div className="slide-brief animated">
                          <h2>EMAAR</h2>
                        </div>
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
                            Make An Enquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
            data-bs-bg={publicUrl + "assets/img/banner/2.jpg"}
          >
            <div className="ltn__slide-item-inner  text-right text-end">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className="slide-title animated ">
                          A New Standard for
                          <br />
                          the Island Living Experience
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            A serene oasis nestled amidst the bustling urban
                            landscape of Dubai Creek.
                          </p>
                        </div>
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
                            Make An Enquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          <div
            className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60"
            data-bs-bg={publicUrl + "assets/img/banner/3.jpg"}
          >
            <div className="ltn__slide-item-inner  text-left">
              <div className="container">
                <div className="row">
                  <div className="col-lg-24 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className="slide-title animated ">
                          Elevating the Definition <br />
                          of Luxury Living
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Creek Waters 2 embodies the essence of upscale urban
                            living, seamlessly integrating the finest elements
                            of premium residential neighbourhoods while offering
                            unparalleled vistas of the surrounding area.
                          </p>
                        </div>
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
                            Make An Enquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    );
  }
}

export default Banner;

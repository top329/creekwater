import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Form, Input, TextArea } from "semantic-ui-react";

const SERVICE_ID = "service_gvg60ul";
const TEMPLATE_ID = "template_7bt2999";
const USER_ID = "AyPlD2eikROOWsIDu";

function ContactForm() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="col-lg-12" id="contact">
      <div className="ltn__form-box contact-form-box box-shadow white-bg">
        <Form onSubmit={handleOnSubmit}>
          <h4 className="title-2">Get A Quote</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="input-item input-item-name">
                <Input
                  id="form-input-control-first-name"
                  name="first_name"
                  placeholder="First Name…"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-name ltn__custom-icon">
                <Input
                  id="form-input-control-last-name"
                  name="last_name"
                  placeholder="Last Name…"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-email ltn__custom-icon">
                <Input
                  id="form-input-control-email"
                  name="email"
                  placeholder="Email…"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-item input-item-phone ltn__custom-icon">
                <Input
                  id="form-input-control-phone"
                  name="phone"
                  placeholder="Phone…"
                  required
                />
              </div>
            </div>
          </div>
          <div className="input-item input-item-textarea ltn__custom-icon">
            <TextArea
              id="form-textarea-control-opinion"
              name="message"
              placeholder="Message…"
              required
            />
          </div>
          <p>
            <label className="input-info-save mb-0">
              <input type="checkbox" name="agree" /> Save my name, email, and
              website in this browser for the next time I comment.
            </label>
          </p>
          <div className="btn-wrapper mt-0">
            <button
              className="btn theme-btn-1 btn-effect-1 text-uppercase"
              type="submit"
            >
              Make an Enquiry
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;

import React, { useState } from "react";
import Email from "../assets/images/email.png";
import Location from "../assets/images/location1.png";
import Navbar1 from "../components/Navbar1";
import "../style/contactForm.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function ContactForm() {
  const [value, setValue] = useState();
  const [formData, setFormData] = useState({})

  const handleFormData = (e) =>{
    const {name, value} = e.target;
    let newValue = {...formData};
    newValue[name] = value
    setFormData(newValue)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    alert(JSON.stringify(formData))
  }
  return (
    <>
      <Navbar1 />
      <section className="bg-light form-section">
        <div className="bg-2">
          <div className="bg-3">
            <div className="d-flex justify-content-center align-items-center flex-column py-5">
              <h3 className="text-primary">Contact Details</h3>
              <div className="box d-flex my-5 col-md-8 m-auto border bg-white">
                <div className="left col-md-6 my-5 p-2 d-flex flex-column align-items-center">
                  <h3 className="text-primary mb-4">Get in touch with us</h3>
                  <div className="d-flex py-3 ">
                    <div>
                      <img src={Email} alt="" srcset="" />
                    </div>
                    <div className="px-3">
                      <h6>Email Us</h6>
                      <p className="text-secondary">support@thecheflane.com</p>
                    </div>
                  </div>
                  <div className="d-flex py-3 pl-1">
                    <div>
                      <img src={Location} alt="" srcset="" />
                    </div>
                    <div className="px-3">
                      <h6>Write to Us</h6>
                      <p className="text-black">
                        Specialist Foods
                        <br />
                        SP7A Guindy Industrial Estate
                        <br />
                        Guindy
                        <br />
                        Chennai - 600032
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right col-md-6 p-5">
                  <form onSubmit={handleFormSubmit} className="form w-100">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                      onChange={handleFormData}
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter name..."
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email ID
                      </label>
                      <input
                      onChange={handleFormData}
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email..."
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tel">Moble Number</label>
                      <div className="mobile_input">
                        <input
                          name="phoneNo"
                          onChange={handleFormData}
                          type="tel"
                          className="form-control"
                          placeholder="Enter number..."
                          required
                        />
                        <div className="dropdown country_code">
                          <button
                            className="btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            +91
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                               +44
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                +1
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="message" className="form-label">
                        Message
                      </label>
                      <textarea
                      onChange={handleFormData}
                        className="form-control"
                        id="message"
                        rows="3"
                        name="message"
                        placeholder="Enter..."
                        required
                      ></textarea>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="btn px-3 py-1 fw-bold bg-white text-primary border-primary">
                        Cancel
                      </button>
                      <button onSubmit={handleFormSubmit} type="submit" className="btn fw-bold px-3 py-1 btn-primary mx-2">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

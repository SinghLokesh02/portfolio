import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white" id="contact">
      <div className="w-[90%] m-auto  p-3">
        <section
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
        >
          <div className="overlay-mf" />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-2">
                          <h5 className="title-left text-2xl font-medium m-3 font-serif">
                            Send Message
                          </h5>
                        </div>
                        <div>
                          <form>
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    rows={5}
                                    placeholder="Message"
                                    required=""
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 text-center m-3">
                                <button
                                  type="submit"
                                  className="bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-800 transition duration-300 ease-in-out"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0">
                          <h5 className="title-left text-2xl font-medium m-3 font-serif">
                            Get in Touch
                          </h5>
                        </div>
                        <div className="more-info">
                          <p className="font-light text-lg my-4">
                            Feel free to reach out for further discussion or
                            inquiries. I am here to assist you in your projects.
                          </p>
                          <ul className="list-ico flex flex-col gap-2 my-3">
                            <li>
                              <span className="bi bi-geo-alt" /> MP NAGAR ZONE-2
                              BHOPAL(M.P)
                            </li>
                            <li>
                              <span className="bi bi-phone" />
                              +91 9340428832
                            </li>
                            <li>
                              <span className="bi bi-envelope" />
                              kmmishra009@gmail.com
                            </li>
                          </ul>
                        </div>
                        <div className="socials">
                          <ul className="flex gap-4">
                            <li>
                              <a href="https://api.whatsapp.com/send?phone=9340428832">
                                <span className="ico-circle">
                                <i className = "fa-brands fa-whatsapp text-4xl text-green-600 hover:text-green-800  text-center"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/kuldeepmishra9752?igsh=bm95amhhZTNzNmI4">
                                <span className="ico-circle">
                                <i class="fa-brands fa-instagram text-4xl text-red-600 hover:text-red-800"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="https://x.com/Kuldeep68226108?t=QsLlU9mRrS5ZSRGVKLrmkA&s=09">
                                <span className="ico-circle">
                                <i class="fa-brands fa-twitter text-4xl hover:text-blue-600 text-blue-400"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/in/kuldeep-mishra-4201631b6/">
                                <span className="ico-circle">
                                <i class="fa-brands fa-linkedin text-4xl text-blue-600 hover:text-blue-800"></i>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

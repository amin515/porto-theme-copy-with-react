

import { Component } from "react";

class Contact extends Component {
    render(){
        return(
            <>
            <section className="map-sec">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798911863!2d-74.25986818535776!3d40.69767006766623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649002469134!5m2!1sen!2sbd"></iframe>
            </section>
            {/* contact form */}

            <section className="contact-form">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-left">
                                  <div className="form-content d-flex">
                                      <h2>Contact</h2>
                                      <h2>Us</h2>
                                  </div>
                                  <div className="form-text">
                                      <p>Feel free to ask for details, don't save any questions!</p>
                                  </div>
                              </div>
                              <div className="main-form">
                                  <div className="wide d-flex">
                                      <div className="top w-100">
                                      <label htmlFor="your name">Your Name*</label>
                                  <input type="text" className="form-control w-100 my-2" />
                                      </div>
                                      <div className="bottom w-100">
                                      <label htmlFor="your email">Your Email Address*</label>
                                  <input type="text" className="form-control w-100 my-2" />
                                      </div>
                                  </div>
                                  <label htmlFor="your email">Subject*</label>
                                  <input type="text" className="form-control my-2" />
                                  <label htmlFor="your email">Message*</label>
                                  <textarea name="" id="" cols="80" rows="10" className="form-control my-4"></textarea>
                                   <button className="btn btn-lg btn-primary" value="submit">Submit</button>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-right">
                                  <div className="office-wrap">
                                      <div className="office-total-content">
                                       <div className="office-content d-flex">
                                        <h5>Our</h5>
                                        <h5>Office</h5>
                                       </div>
                                       <div className="office-social d-flex">
                                       <i class='bx bx-map'></i>
                                       <p><strong>Address: </strong> 1234 Street Name, City Name, United States</p>
                                       </div>
                                       <div className="office-social d-flex">
                                       <i class='bx bx-phone'></i>
                                       <p><strong>Phone: </strong> (123) 456 - 789</p>
                                       </div>
                                       <div className="office-social d-flex">
                                       <i class='bx bx-envelope'></i>
                                       <p><strong>Email: </strong>mail@example.com</p>
                                       </div>
                                    </div>
                                    <div className="office-total-content">
                                       <div className="office-content d-flex">
                                        <h5>Business</h5>
                                        <h5>Hours</h5>
                                       </div>
                                       <div className="office-social-l d-flex">
                                       <i class='bx bx-time-five' ></i>
                                       <p>Monday - friday 9am to 5pm</p>
                                       </div>
                                       <div className="office-social-l d-flex">
                                       <i class='bx bx-time-five' ></i>
                                       <p>Saturday - 9am to 2pm</p>
                                       </div>
                                       <div className="office-social-l d-flex">
                                       <i class='bx bx-time-five' ></i>
                                       <p>Sunday Close</p>
                                       </div>
                                    </div>
                                    <div className="office-total-content">
                                       <div className="office-content d-flex">
                                        <h5>Get in</h5>
                                        <h5>Touch</h5>
                                       </div>
                                      <div className="office-text">
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt iure possimus officiis vitae sit accusamus. Aperiam labore quaerat aliquid eaque saepe adipisci illum voluptatem fugiat reiciendis delectus, modi totam.</p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </section>
            {/* contact end sec */}
            <section className="buy-now-sec">
        <div class="triangle"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="b-now">
                        <div className="buy-now-conten d-flex justify-content-center">
                            <h3>Porto is </h3>
                            <h3>everything</h3>
                            <h3> you need to create an </h3>
                            <h3>awesome</h3>
                            <h3>website!</h3>
                          </div>
                          <p>The Best Selling Woocommerce Theme on ThemeForest</p>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-center">
                        <button className="btn btn-lg btn-dark">BUY NOW</button>
                    </div>
                </div>
            </div>
        </section>
            </>
        )
    }
}

export default Contact;
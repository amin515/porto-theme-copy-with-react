
function Header(){
    return(
        <>
                {/* header-section */}
            <section>
              <div className="container">
                  <div className="row">
                      <div className="header d-flex">
                          <div className="col-md-4">
                              <div className="header-left">
                                 <img src="https://www.portotheme.com/wordpress/porto/corporate1/wp-content/themes/porto/images/logo/logo_black.png" alt="" />
                              </div>
                          </div>
                          <div className="col-md-8">
                              <div className="header-right d-flex">
                                <div className="header-menu d-flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Elements</a></li>
                                        <li><a href="#">Features</a></li>
                                        <li><a href="#">Page</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">BUY PORTO!</a></li>
                                    </ul>
                                </div>
                                <div className="separator d-flex">
                                    <div className="separet"></div>
                                    <li><i class='bx bxl-facebook'></i></li>
                                    <li><i class='bx bxl-twitter'></i></li>
                                    <li><i class='bx bxl-linkedin'></i></li>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </>
    )
}

export default Header;
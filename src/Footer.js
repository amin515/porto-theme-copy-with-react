
function Footer(){
    return(
        <>
    {/* footer sec */}
    <section className="footer-sec">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-3">
                             <div className="footer-img">
                                 <img src="https://www.portotheme.com/wordpress/porto/corporate1/wp-content/uploads/sites/7/2018/12/logo_white_large.png" alt="" />
                             </div>
                         </div>
                         <div className="col-md-2">
                             <div className="footer-text-1">
                               <h5>Pages</h5>
                               <li className="d-flex"><i class='bx bx-chevron-right'></i>Our service</li>
                               <li className="d-flex"><i class='bx bx-chevron-right'></i>About us</li>
                               <li className="d-flex"><i class='bx bx-chevron-right'></i>Contact us</li>
                             </div>
                         </div>
                         <div className="col-md-2">
                         <div className="footer-text-2">
                         <h5>Links</h5>
                         <li className="d-flex"><i class='bx bx-chevron-right'></i>FAQ's</li>
                         <li className="d-flex"><i class='bx bx-chevron-right'></i>Site map</li>
                         </div>
                         </div>
                         <div className="col-md-5">
                         <div className="footer-text-3">
                         <h5>Newsletter</h5>
                         <input type="text" className="form-control d-flex email_add" placeholder="email address"
                         /><button>Go!</button>
                         <div className="footer-last d-flex">
                         <li className="d-flex"><i class='bx bxl-whatsapp' ></i>01303292586</li>
                         <li className="d-flex"><i class='bx bx-envelope' ></i>Email us</li>
                         </div>
                         
                         </div>
                         </div>
                     </div>
                 </div>
                 <div className="owner-info">
                     <p>&copy;2022 All right reserved</p>
                 </div>
 </section>
        </>
    )
}

export default Footer;
import "./Contact.css";

import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  faContactBook, faEnvelope, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import {  faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div id="Contact-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-light">
                My Personal Information
              </h1>
              </div>
          </div>
        </div>
      </div>



              <section id="faq">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="card">
                      </div>
                    </div>
                  </div>
              </div>
              </section>
     
 <footer class="footer text-light fixed-bottom pt-3" id="footer">
    <div class="container">
        <div class="row al">
            <div class="col-md-3 col-sm-6 text-lg-start text-center">
                <h5 className="fw-bold">
                <FontAwesomeIcon className="icons me-1" icon={faMapLocation} />
                  Home Address
                  </h5>
                <p>Prk Malipayon , Brgy. Tagukon Kabankalan City<br/> Negros, Occidental, Philippines</p>
            </div>
            <div class="col-md-3 col-sm-6 text-lg-start text-center">
            <h5 className="fw-bold">
            <FontAwesomeIcon className="icons me-1" icon={faContactBook} />
              My contact</h5>
             <p>09355323102</p>
             </div> 

            <div class="col-md-3 col-sm-3 text-lg-start text-center">
            <h5 className="fw-bold">
            <FontAwesomeIcon className="icons me-1" icon={faEnvelope} />
              Email</h5>
                 <p>juljimenez496@gmail.com</p>
            </div> 

         </div>
      </div>          
</footer>

                 
               
      
      </>
  );
};

export default Contact;
import "./Experience.css";
import Navbar from "./Navbar";
import pic1Image from "./img/dd13.JPG"
import pic2Image from "./img/dd08.JPG"
import pic3Image from "./img/dd04.JPG"
import pic4Image from "./img/dd07.JPG"
import pic5Image from "./img/dd09.jpeg"
import pic6Image from "./img/dd05.JPG"
import pic7Image from "./img/dd06.JPG"



const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="text-light fw-bold display-1 text-center mt-5 pt-5">
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>

     <div className="exp">
      <div className="container">
        <hr/>
        <div className="row mb-5">
          <h3 className="text-center">My Thesis Project</h3>
          <hr/>
          <div className="col-lg-6 text-center">
            <img className="one" src={pic1Image} />
            <h4 >Final Defense </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic2Image} />
            <h4 >BSIT 3rd Student Colloquium 2024 </h4>
          </div>
          <div className="center col-lg-6">
            <img className="one" src={pic3Image} />
            <h4>Pre-Oral Defense </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic4Image} />
            <h4>Best in Poster/Papers (Colloquium)  </h4>
          </div>
        </div>
        <hr />
        <div className="row mb-5">
          <h3 className="text-center">My School Activity And My On-The Job Training</h3>
          <hr/>
          <div className="col-lg-6">
            <img className="one" src={pic5Image} />
            <h4> OJT </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic6Image} />
            <h4 >FLP HIP-HOP CHAMPION </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic7Image} />
            <h4 >Production Numbers of Mr/Miss FLP </h4>
          </div>
        </div>
      </div>
     </div>

    </>
  );
};

export default Experience;

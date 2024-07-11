import "./Portfolio.css";
import Navbar from "./Navbar";
import andy3Image from "./img/dd12.jpg"
import andy4Image from "./img/dd11.jpg"
import andy5Image from "./img/dd10.png"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="text-light fw-bold display-1 text-center mt-5 pt-5">
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h3>Projects</h3>
            <hr />
          <div className="col">
          <img className="one" src={andy3Image} />
          <h4 className="mt-5 text-center">Calculator Project</h4>

          <center>
                <a href="" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
          </div>
          <div className="col">
          <img className="two" src={andy4Image} />
          <h4 className="mt-5 text-center">My React Project</h4>

          <center>
                <a href="" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
          </div>
          <div className="col">
          <img className="three" src={andy5Image} />
          <h4 className="mt-5 text-center">My Thesis</h4>

          <center>
                <a href="" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

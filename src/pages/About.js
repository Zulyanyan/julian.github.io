import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/dd03.jpg"

const About = () => {
  return (
    <>
      <Navbar /> 

          <div id="about-info">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="text-light fw-bold display-1 text-center mt-5 pt-5">
                Aboutpage
              </h1>
            </div>
          </div>
        </div>
      </div>

      
      <div className="wrapper">
        <div className="overlay">
          <div className="container1"> 


      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow mt-5 p-5 mb-5">
            <div className="row">
              <div className="col-lg-12">
               <center><img src={myImage}/></center>
            </div>
            <div className="col-lg-12">
              <div className="card shadow mb-3 mt-5 p-3 ">
              <h4 className="text-secondary">About Me</h4>
             <p>Hi i'm Julian M. Jimenez Jr. Im 22 Years Old Studied In Central Philipphines State University (CPSU) taking a course of Bachelor of Science in Information Technology(BSIT) I have interested to PC Assemble Disassemble sometimes and sometimes networking but sometimes i love reading books and i like dancing all the times and watching movie series.</p>
              </div>
              <div className="card shadow p-3 ">
              <h4 className="text-secondary">Academic Journey</h4>
             <p>Primary: Tagukon Elementary School  S.Y: 2006-2013<br />Secondary: Tagukon National High School S.Y: 2013-2020<br /> Tretiary: Central Phillipines State University (CPSU)</p>
              </div>
            </div>
              </div> 
          </div>
        </div>
      </div>
      </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default About;

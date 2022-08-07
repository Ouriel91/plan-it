import React from 'react'
import { useNavigate } from "react-router-dom";
import yuliaImg from "./img-members/yulia.png"
import oriImg from "./img-members/Ori.png"
import ourielImg from "./img-members/ouriel.jpg"
import AboutUsNavbar from './AboutUsNavbar/AboutUsNavbar';
import "./AboutUs.css";
import Footer from '../../../../Footer/Footer';



const AboutUs = (event, user) =>
    {
        const navigate = useNavigate();
        const handleBackHomeClick = () =>{
            navigate("/");
        }
        return (
            
            <div className="row justify-content-center text-center">
            <AboutUsNavbar event={event} user={user}/>
                <section className='opening-sentence-container-about'>
                <p className='opening-sentence-about'>Our Dream and Goals </p>
                <p className='opening2-sentence-about'> Building a tool that helps to creact and manage your next trip 
                <br /> in the easiest and most efficient way.
                <br /> Because sometimes, this task can be quite complicated..  </p>
                </section>
                <p className='opening-sentence-about-meet'>Introducing the goal achievers...</p>
              <div className="section-team">
              
                <div className="header-section"></div>
                <div className="row justify-content-center text-center">
                  <div className="col-md-8 col-md-6"></div>
                </div>

                <div className="row">
                  <div className="col-sm-6 col-lg-2 col-xl-3">
                    <div className="single-person">
                      <div className="person-image">
                        <img src="https://i.ibb.co/2cP5jjB/profile1.jpg" alt="" />
                        <span className="icon">
                        
                          <i className="fab fa-github"></i>
                        </span>
                      </div>
                      <div className="person-info">
                        <h3 className="full-name">Avihai Kuperberg</h3>
                        <span className="speciality">Freak of Fps games and a hater of avatars!  </span>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-sm-6 col-lg-2 col-xl-3">
                    <div className="single-person">
                      <div className="person-image">
                        <img src={yuliaImg} alt="" />
                        <span className="icon">
                        <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div className="person-info">
                        <h3 className="full-name">Yulia Kuderko </h3>
                        <span className="speciality">The design queen and a pro project manager</span>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-sm-6 col-lg-2 col-xl-3">
                    <div className="single-person">
                      <div className="person-image">
                        <img src={ourielImg} alt="" />
                        <span className="icon">
                          <i className="fab fa-css3-alt"></i>
                        </span>
                      </div>
                      <div className="person-info">
                        <h3 className="full-name">Ouriel Ohayon</h3>
                        <span className="speciality">Google API's master and a Macabbi Haifa biggest fan </span>
                      </div>
                    </div>
                  </div>
        
                  <div className="col-sm-6 col-lg-2 col-xl-3">
                    <div className="single-person">
                      <div className="person-image">
                        <img src={oriImg} alt="" />
                        <span className="icon">
                          <i className="fab fa-js"></i>
                        </span>
                      </div>
                      <div className="person-info">
                        <h3 className="full-name">Ori Hassid</h3>
                        <span className="speciality">Redux beast and a perfect crew member</span>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
             
              <button onClick={handleBackHomeClick} type="button" class="btn22">Home Page</button>
             <Footer/>
            </div>
          );
}

export default AboutUs;
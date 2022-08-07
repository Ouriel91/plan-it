import React from 'react'
import "./AboutUsCards.css"
import 'aos/dist/aos.css'

function AboutUsCards() {
  return (
    <section className='about-us-container'>
      <div data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='about-us-description'>
        <p className='title'>We all know how much effort it takes to organize a meet-up with friends. </p>
        <p className='description'>You don't know where to start? Plan it. is the perfect place to get the fun started!</p>
        </div>
      <div className='row d-flex justify-content-center'>
        <div data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="600" data-aos-duration="1000" className=' col-11 col-md-3 col-lg-3 mx-0 mb-4'>
          <div className="card text-center " style={{backgroundColor: "#fffdecc1"}} >
            <div className="card-header" style={{color: "#aaba76c6"}}>
              Easy Arrangments
            </div>
            <div className="card-body">
              <p className="card-text">Before you get the party started, you need to find just the right time and of course, the right people. Plan a personal invitation for your friends. </p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="900" data-aos-duration="1000" className='col-11 col-md-3 col-lg-3 mx-0 mb-4'>
          <div className="card text-center" style={{backgroundColor: "#fffdecc1"}} >
            <div className="card-header" style={{color: "#aaba76c6"}}>
              Equipment Suggestions
            </div>
            <div className="card-body">
              <p className="card-text">Nobody wants to get stuck without salt in a bbq, right? <br /> No worries, all of the things you need in order to have a great time are listed.</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="1200" data-aos-duration="1000" className='col-11 col-md-3 col-lg-3 mx-0 mb-4'>
          <div className="card text-center" style={{backgroundColor: "#fffdecc1"}}>
            <div className="card-header" style={{color: "#aaba76c6"}}>
              Cool Spots
            </div>
            <div className="card-body">
              <p className="card-text">Our application gives you a list of places to choose from, <br /> for you and your friends, based on the event type you picked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUsCards
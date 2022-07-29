import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function PlanCarousel() {
  return (
    <MDBCarousel 
    className='mbd-carousle'
      style={{maxHeight: '60%'}}
     showControls showIndicators>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/088.webp' alt='...' />
          <MDBCarouselCaption>
            <h2>Camping With Friends</h2>
            <p>Plan it Enjoy it....</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/001.webp' alt='...' />
          <MDBCarouselCaption>
            <h2>BBQ</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/123.webp' alt='...' />
          <MDBCarouselCaption>
          <h2>Camping With Friends</h2>
            <p>Plan it Enjoy it....</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
import React from 'react';
import { CDBFooter, CDBIcon, CDBBox } from 'cdbreact';
import "./Footer.css"
import logo from "../../images/app-logo.png"

const Footer = () => {
  return (
    <CDBFooter className='shadow'>
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%', fontSize: '20px' }}>
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="50px"
              height={50}
            />
            <span className="ml-4 h2 mb-0 font-weight-bold">Plan it.</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; Plan it. 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
            <CDBIcon fab size="md" icon="facebook" />
            <CDBIcon fab size="md" icon="whatsapp mx-3" />
            <CDBIcon fab size="md" icon="instagram" />
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
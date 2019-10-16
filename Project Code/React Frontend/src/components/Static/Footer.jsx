import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import Logo from "../../Images/Logo_Light.svg";
import "../../styles/Footer.scss";

const FooterPagePro = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <img className="logo-footer" src={Logo} alt="Logo" />
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3" className="footer_li">
            <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">
              About Us
            </h6>

            <ul className="list-unstyled AboutList">
              <li>
                <a href="/TrustANDSafety">Trust & Safety</a>
              </li>
              <li>
                <a href="/HelpAndSupport">Help & Support</a>
              </li>
              <li>
                <a href="/OurRules">Our Ruels</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3" className="footer_li">
            <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Entrepreneurs
            </h6>
            <ul className="list-unstyled">


              <li>
                <a href="/GoInvestMe_Expert">Experts Directory</a>
              </li>
              <li>
                <a href="/GoInvestMe_VS_Indiegogo">GoInvestMe_VS_Indiegogo</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <hr />

      <div className=" text-center py-3">
        <MDBContainer className="copy">Copyright &#169; 2019</MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;

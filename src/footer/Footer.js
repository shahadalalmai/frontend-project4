import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'

const FooterPage = () => {
  return (
      <div className="myFooter">
    <MDBFooter  color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Riyadh Metro Ticketing System</h5>
            <p>
              Book your Riyadh Metro Tickets anytime, anywhere starting from 24 Saudi Riyals.
            </p>
          </MDBCol>
          <MDBCol md="6"> 

            <h5 className="title">Support</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Legal</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Riyadh Metro </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;
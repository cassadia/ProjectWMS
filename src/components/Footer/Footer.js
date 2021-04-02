import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <Container fluid>
        <div>
          {/* <hr /> */}
          <div className="row">
            <p
              style={{
                marginLeft: "2em",
                marginTop: "1rem",
                fontSize: "0.625rem"
              }}
            >
              Copyright &copy; 2021, Saiman Inc.{" "}
            </p>
            <p
              style={{
                marginRight: "2em",
                marginTop: "1rem",
                fontSize: "0.625rem"
              }}
              className="ml-auto"
            >
              Powered by React.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

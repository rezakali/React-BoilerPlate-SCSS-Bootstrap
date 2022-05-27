import logo from "../images/reactjs-icon.png";
import { Row, Container, Colomn } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Container>
        <div className="row align-items-center py-3">
          <div className="col-6">
            <div className="logo-wrapper d-flex align-items-center">
              <img src={logo} alt="Logo" />
              <h3>ReactFacts</h3>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="heading">
              <h4>React Course - Project 1</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;

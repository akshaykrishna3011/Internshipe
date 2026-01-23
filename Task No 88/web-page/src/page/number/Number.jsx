import { Container, Row, Col } from "react-bootstrap";
import "./Number.css";

const Dot = ({ duration }) => (
  <div className="dot scroll-animate" style={{ "--duration": duration }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 200 200"
      fill="currentColor"
    >
      <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" />
    </svg>
  </div>
);

const Numbers = () => {
  return (
    <section className="tree">
      <Container fluid>
        <div className="th-heading scroll-animate text-center pb-5">
          <h1>We’re Good with Numbers</h1>
        </div>

        <Row className="justify-content-center align-items-center text-center g-3">
          <Col xs={6} sm={4} md={2}>
            <div className="number scroll-animate" style={{ "--duration": "0.5s" }}>
              <h1>15</h1>
            </div>
            <div className="text scroll-animate" style={{ "--duration": "0.5s" }}>
              <p>Years of Experience</p>
            </div>
          </Col>

          <Col xs="auto"><Dot duration="0.5s" /></Col>

          <Col xs={6} sm={4} md={2}>
            <div className="number scroll-animate" style={{ "--duration": "1s" }}>
              <h1>36</h1>
            </div>
            <div className="text scroll-animate" style={{ "--duration": "1s" }}>
              <p>Qualified Experts</p>
            </div>
          </Col>

          <Col xs="auto"><Dot duration="1s" /></Col>

          <Col xs={6} sm={4} md={2}>
            <div className="number scroll-animate" style={{ "--duration": "1.5s" }}>
              <h1>120</h1>
            </div>
            <div className="text scroll-animate" style={{ "--duration": "1.5s" }}>
              <p>Clients Every Year</p>
            </div>
          </Col>

          <Col xs="auto"><Dot duration="1.5s" /></Col>

          <Col xs={6} sm={4} md={2} className="animi">
            <div className="number scroll-animate" style={{ "--duration": "2s" }}>
              <h1>9</h1>
            </div>
            <div className="text scroll-animate" style={{ "--duration": "2s" }}>
              <p>Intl. Partners</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Numbers;

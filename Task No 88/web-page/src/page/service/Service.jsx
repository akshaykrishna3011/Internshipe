import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.css";

const Service = () => {
  return (
    <section className="two" id="services">
      <Container fluid>
        {/* Headings */}
        <div>
          <div className="ser-heading scroll-animate">
            <h6>SERVICES</h6>
          </div>

          <div className="sub-heading scroll-animate text-center">
            <h1>Taking Your Business to the Next Level</h1>
          </div>
        </div>

        {/* Services Cards */}
        <Row className="service-row">
          {/* CARD 1 */}
          <Col md={4} className="d-flex justify-content-evenly">
            <Card
              className="service-card scroll-animate border-0"
              style={{ "--duration": "0.5s" }}
            >
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "150px" }}
              >
                <svg viewBox="26.5 23.75 147 152.5" width="120" height="120">
                  <g>
                    <path
                      fill="#16163F"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M42 170.25a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"
                    />
                    <path
                      fill="#E7E7EB"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M173.5 103.75c0 31.48-25.52 57-57 57s-57-25.52-57-57 25.52-57 57-57 57 25.52 57 57z"
                    />
                    <path
                      fill="#9E3FFD"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M116.5 68.75c0 24.853-20.147 45-45 45s-45-20.147-45-45 20.147-45 45-45 45 20.147 45 45z"
                    />
                  </g>
                </svg>
              </div>

              <Card.Body className="text-center">
                <Card.Title>Business Plans</Card.Title>
                <Card.Text>
                  I'm a paragraph. Click here to add your own text and edit me.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* CARD 2 */}
          <Col md={4} className="d-flex justify-content-evenly">
            <Card
              className="service-card scroll-animate border-0"
              style={{ "--duration": "1s" }}
            >
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "150px" }}
              >
                <svg viewBox="20 34.606 159.999 126.634" width="120" height="120">
                  <g>
                    <path
                      fill="#16163F"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M60.163 40.369a5.763 5.763 0 1 1-11.526 0 5.763 5.763 0 0 1 11.526 0z"
                    />
                    <path
                      fill="#E7E7EB"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M37.029 103.69l40.464 40.531a9.606 9.606 0 0 1 0 13.572l-.627.628a9.604 9.604 0 0 1-13.583.011l-40.465-40.531a9.606 9.606 0 0 1 0-13.572l.627-.628a9.604 9.604 0 0 1 13.583-.011z"
                    />
                    <path
                      fill="#9E3FFD"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M62.556 144.076L162.971 43.492a9.604 9.604 0 0 1 13.583-.011l.627.628a9.606 9.606 0 0 1 0 13.572L76.777 158.276a9.604 9.604 0 0 1-13.583.011l-.627-.628a9.606 9.606 0 0 1 0-13.572z"
                    />
                  </g>
                </svg>
              </div>

              <Card.Body className="text-center">
                <Card.Title>Accounting Services</Card.Title>
                <Card.Text>
                  I'm a paragraph. Click here to add your own text and edit me.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* CARD 3 */}
          <Col md={4} className="d-flex justify-content-evenly">
            <Card
              className="service-card scroll-animate border-0"
              style={{ "--duration": "1.5s" }}
            >
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "150px" }}
              >
                <svg viewBox="26.982 26 146.037 148" width="120" height="120">
                  <g>
                    <path
                      fill="#16163F"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M173.019 168.11a5.89 5.89 0 1 1-11.78 0 5.89 5.89 0 0 1 11.78 0z"
                    />
                    <path
                      fill="#E7E7EB"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M153.608 59.374v93.252H60.356V59.374h93.252z"
                    />
                    <path
                      fill="#9E3FFD"
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M92.749 26v65.767H26.982V26h65.767z"
                    />
                  </g>
                </svg>
              </div>

              <Card.Body className="text-center">
                <Card.Title>Finance Optimization</Card.Title>
                <Card.Text>
                  I'm a paragraph. Click here to add your own text and edit me.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;

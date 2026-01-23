import { Container, Row, Col } from "react-bootstrap";
import "./Client.css";
import client1 from "../../assets/client1-logo.svg";
import client2 from "../../assets/client2-logo.svg";
import client3 from "../../assets/client3-logo.svg";
import client4 from "../../assets/client4-logo.svg";
import client5 from "../../assets/client5-logo.svg";

const Client = () => {
  return (
    <section id="client">

      {/* HEADING */}
      <div className="client-heading">
        <h1>OUR HAPPY CLIENTS</h1>
      </div>

      {/* LOGO ROW */}
      <Container fluid className="p-0">
        <Row className="client-row align-items-center text-center">

          <Col xs={6} md={4} lg={2}>
            <img src={client1} alt="Client Logo" />
          </Col>

          <Col xs={6} md={4} lg={2}>
           <img src={client2} alt="Client Logo" />
          </Col>

          <Col xs={6} md={4} lg={2}>
            <img src={client3} alt="Client Logo" />
          </Col>

          <Col xs={6} md={4} lg={2}>
            <img src={client4} alt="Client Logo" />
          </Col>

          <Col xs={6} md={4} lg={2}>
            <img src={client5} alt="Client Logo" />
          </Col>

        </Row>
      </Container>

    </section>
  );
};

export default Client;

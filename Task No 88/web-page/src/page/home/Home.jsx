import { Container, Row, Col, Button } from "react-bootstrap";
import './Home.css'

const Home = () => {
  return (
    <section id="home">
    <Container fluid className="hero">
      <Row>
        <Col md={12}>
          <div className="heading scroll-animate">
            <h1 className="fw-bolder pt-5">
              The Power <br />
              of Good Advice
            </h1>
          </div>

          <div className="paragraph scroll-animate pt-4">
            <p className="fw-light">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>

          <div className="button scroll-animate">
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default Home;

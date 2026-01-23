import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <section className="four" id="about">
      <Container fluid>
        <Row>
          {/* Left Column: Text */}
          <Col lg={6} md={6}>
            <div className="left-heading scroll-animate" style={{ "--i": 1 }}>
              <h1 className="fw-bold mb-3 pb-2">ABOUT</h1>
            </div>

            <div className="left-subheading scroll-animate" style={{ "--i": 2 }}>
              <h2 className="fw-semibold mb-4 pb-4">
                Our Experts Are the Finest
              </h2>
            </div>

            <div className="text-secondary scroll-animate" style={{ "--i": 3 }}>
              <p className="mb-3">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>

              <p>
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </p>
            </div>
          </Col>

          {/* Right Column: Image */}
          <Col lg={6} md={12} className="p-0">
            <div className="right-image">
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

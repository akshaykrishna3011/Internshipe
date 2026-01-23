import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container fluid>
        <Row className="row-custom">
          {/* Left side */}
          <Col>
            <div className="contact">
              <h6>CONTACT</h6>
              <h2 className="pt-3 fw-bold">Let’s Work Together</h2>

              <p className="pt-4">
                500 Terry Francine St. San Francisco, CA 94158 <br />
                info@mysite.com <br />
                Tel: 123-456-7890
              </p>

              <div className="icon pt-4">
                <i className="fa-brands fa-linkedin-in me-3"></i>
                <i className="fa-brands fa-facebook-f me-3"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </Col>

          {/* Right side */}
          <Col className="d-flex justify-content-center">
            <Form className="p-5">
              <Row>
                <Col md={6}>
                  <Form.Label className="form-label-custom">
                    First Name*
                  </Form.Label>
                  <Form.Control type="text" className="clean-input" />
                </Col>

                <Col md={6}>
                  <Form.Label className="form-label-custom">
                    Last Name*
                  </Form.Label>
                  <Form.Control type="text" className="clean-input" />
                </Col>
              </Row>

              <div className="mt-4">
                <Form.Label className="form-label-custom">
                  Email*
                </Form.Label>
                <Form.Control type="email" className="clean-input" />
              </div>

              <div className="mt-4">
                <Form.Label className="form-label-custom">
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  className="clean-input"
                />
              </div>

              <Button className="submit-btn mt-4">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

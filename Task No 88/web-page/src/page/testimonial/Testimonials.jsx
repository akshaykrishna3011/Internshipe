import { Container, Carousel } from "react-bootstrap";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <section className="five" id="testimonials">
      <Container fluid className="p-0">
        <Carousel indicators interval={4000} pause={false} controls={false}>
          
          {/* Slide 1 */}
          <Carousel.Item>
            <div className="testimonial-slide d-flex flex-column justify-content-between align-items-center text-center">
              <h2 className="testimonial-title">TESTIMONIALS</h2>

              <h1 className="testimonial-text my-auto pt-5">
                "I'm a testimonial. Click to edit me and add text."
              </h1>

              <div className="testimonial-author mb-4">
                <h5>Josh Phillips</h5>
                <p>Company name</p>
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <div className="testimonial-slide d-flex flex-column justify-content-between align-items-center text-center">
              <h2 className="testimonial-title">TESTIMONIALS</h2>

              <h1 className="testimonial-text my-auto pt-5">
                "I'm a testimonial. Click to edit me and add text."
              </h1>

              <div className="testimonial-author mb-4">
                <h5>Gabriella Spring</h5>
                <p>Company name</p>
              </div>
            </div>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <div className="testimonial-slide d-flex flex-column justify-content-between align-items-center text-center">
              <h2 className="testimonial-title">TESTIMONIALS</h2>

              <h1 className="testimonial-text my-auto pt-5">
                "I'm a testimonial. Click to edit me and add text."
              </h1>

              <div className="testimonial-author mb-4">
                <h5>Louise Maxwell</h5>
                <p>Company name</p>
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
    
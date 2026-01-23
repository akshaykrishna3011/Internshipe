import React from "react";
import { Container } from "react-bootstrap";
import './Map.css'

const Map = () => {
  return (
    <section className="map-section">
      <Container fluid className="p-0">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?width=1500&height=350&hl=en&q=san%20francisco%2Cmarkt%20st&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </section>
  );
};

export default Map;

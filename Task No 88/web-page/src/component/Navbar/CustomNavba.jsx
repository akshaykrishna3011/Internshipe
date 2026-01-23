import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

const CustomNavbar = () => {
  return (
    <Navbar fixed='top' expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand className='navbar-brand'href="#">BizBud</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#services" className='nav-link'>Services</Nav.Link>
            <Nav.Link href="#about" className='nav-link'>About</Nav.Link>
            <Nav.Link href="#testimonials" className='nav-link'>Testimonials</Nav.Link>
            <Nav.Link href="#client" className='nav-link'>Clients</Nav.Link>
            <Nav.Link href="#contact" className='nav-link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button >Call Now</Button>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

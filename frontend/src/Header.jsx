import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css"

function Header() {
  return (

      <Navbar className = "custom-navbar" >
        <Container>
          <Navbar.Brand href="#home" className = "Logo"> U Hackathon </Navbar.Brand>
          <Nav className="ms-auto Redirects">

            <Nav.Link href="#sponsors" >Sponsor Us</Nav.Link>
            <Nav.Link href="#about"  >About</Nav.Link>
            <Nav.Link href="#schedule" >Schedule</Nav.Link>
            <Nav.Link href="#faq" >FAQ</Nav.Link>
            <Nav.Link href="#register" className = "register-button"  >Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  );
}

export default Header;
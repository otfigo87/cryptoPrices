import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Form, NavDropdown, Offcanvas } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" className="mb-3">
        <Container fluid>
          <Navbar.Brand>Crypto</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="text-link">
                  <Nav.Link href="#action1">Home</Nav.Link>
                </Link>
                <Link to="/currencies" className="text-link">
                  <Nav.Link href="#action2">Currencies</Nav.Link>
                </Link>
                <Link to="/news" className="text-link">
                  <Nav.Link href="#action2">News</Nav.Link>
                </Link>
                <NavDropdown title="More" id={`offcanvasNavbarDropdown-expand`}>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar
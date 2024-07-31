import {Navbar,Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
  <Container>
    <Navbar.Brand as={Link} to="/">Expense Management</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/manage-expense">Expense</Nav.Link>
      <Nav.Link as={Link} to="/manage-category">Category</Nav.Link>
    </Nav>
  </Container>
</Navbar>
  )
}

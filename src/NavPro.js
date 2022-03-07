import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavPro =()=>{
    return (
        <div>
            <Navbar bg="primary" variant="light">
                <Container>
                <Navbar.Brand><Link to={'/'}>FCB</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to={'/'} >Home</Link></Nav.Link>
                    <Nav.Link><Link to={'/users'}>Users</Link></Nav.Link>
                </Nav>
                </Container>
  </Navbar>
        </div>
    )
}
export default NavPro
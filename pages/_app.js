import '../styles/globals.css'
import '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Container, Nav} from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return (
  
    <div>
      <Navbar bg="light" variant="light">
      <Container>
    <Navbar.Brand href="/">GC Booking</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
     </Navbar>
     <div style={{display: 'flex', padding: '2em'}}>
      <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp

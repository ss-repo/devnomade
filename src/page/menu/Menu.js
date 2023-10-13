import { Container,Nav,Navbar,Image } from 'react-bootstrap';
import logo from '../../assets/img/logo/logo.png';

function Menu(){
    return(
    <>
      <Navbar className='' collapseOnSelect expand='md'>
        <Container>
          <Navbar.Brand href='/'>
              <Image className='menu-logo' src={ logo }></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
           <Nav className='me-auto'>
           </Nav>
           <Nav>
              <Nav.Link className='menu-link' href='/'>Home</Nav.Link>
              <Nav.Link className='menu-link' href='#services'>Serviços</Nav.Link>
              <Nav.Link className='menu-link' href='/projetos'>Projetos</Nav.Link>
              <Nav.Link className='menu-link' href='/blog'>Blog</Nav.Link>
              <Nav.Link className='menu-link' href='/sobre'>A Devnomade</Nav.Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
}

export default Menu;
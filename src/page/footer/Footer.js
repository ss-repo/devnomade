import { Container,Image,Row,Col,Nav,Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import avatar from '../../assets/img/avatar.png';
import { FaFacebook,FaYoutube,FaInstagram,FaGithub,FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { requestSubscribeEmail } from '../../features/email/APISubscribeEmail';
import { fireAlert } from '../../features/alert-custom/AlertCustom';

function Footer(){

    const { register, handleSubmit, setValue } = useForm();
    
    const onSubmit = data => {
        requestSubscribeEmail(data);
        fireAlert('success','Email inscrito com sucesso!');
        setValue('email','');
    }
    
    return(
    <div className='footer'>
        <Container>
            <div>
                <Row>
                    <Col md={6}>
                        <Image src={ avatar } className='footer-avatar'></Image>
                        <h4 className='footer-avatar-name'>Sergio Silveira</h4>
                        <p className='footer-avatar-text'>
                        Eu crio belos sites que seus usuários vão adorar.<br /> 
                        Eu trabalho com você do início ao fim para garantir< br /> 
                        que suas metas sejam alcançadas e seus usuários< br /> 
                        fiquem satisfeitos.  
                        </p>

                        <IconContext.Provider value={{ className:'global-footer-icon',size:'1.5em',color:'white' }}>
                            <Nav>
                                <Nav.Link className='footer-link' href='#https://www.youtube.com/channel/UCmx9Rbe6g5a-mK0ybgpWgNA'>
                                    <FaYoutube />
                                </Nav.Link>
                                <Nav.Link className='footer-link' href='#'>
                                    <FaInstagram/>
                                </Nav.Link>
                                <Nav.Link className='footer-link' href='#https://www.facebook.com/devnomade'>
                                    <FaFacebook />
                                </Nav.Link>
                                <Nav.Link className='footer-link' href='#https://github.com/ss-repo'>
                                    <FaGithub />
                                </Nav.Link>
                                <Nav.Link className='footer-link' href='#'>
                                    <FaLinkedin />
                                </Nav.Link>
                            </Nav>
                        </IconContext.Provider>
                        

                        <h5 className='footer-title-news' id='newsletter'>Notícias</h5> 
                        <br />   
                        <p className='footer-text-news'>
                            Fique por dentro de novas ferramentas,promoções <br />
                            e atualizações.
                        </p>
                        <Form onSubmit={ handleSubmit(onSubmit) }>
                            <Row>
                                <Col md={6}>
                                    <Form.Control
                                        className='footer-input-email'
                                        type='email'
                                        id='email'
                                        aria-describedby=''
                                        autoComplete='off'
                                        placeholder=' Coloque seu Email'
                                        {
                                            ...register('email',{ required: true })
                                        }
                                    />
                                </Col>
                                <Col md={6} className='d-grid'>
                                    <Button 
                                        className='footer-button' 
                                        variant='primary' 
                                        type='submit'
                                        >
                                        Inscreva-se
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h5 className='footer-link-title'>Links</h5>
                        <Nav>
                            <Nav.Link className='menu-link footer-nav-link' href='/'>Home</Nav.Link>
                            <Nav.Link className='menu-link footer-nav-link' href='/sobre'>Sobre</Nav.Link>
                            <Nav.Link className='menu-link footer-nav-link' href='/projetos'>Projetos</Nav.Link>
                            <Nav.Link className='menu-link footer-nav-link' href='#services'>Serviços</Nav.Link>
                            <Nav.Link className='menu-link footer-nav-link' href='/blog'>Blog</Nav.Link>
                        </Nav>
                        <br />
                        <h5>Parcerias</h5>
                        <Nav>
                            <Nav.Link className='menu-link footer-nav-link' href='/partners'>Quero ser parceiro</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </div>
            <div className='footer-end'>
                <p className='footer-end-text'>© 2022 Sergio Silveira</p>
                <br />
            </div>
        </Container>
    </div>
    )
}

export default Footer;
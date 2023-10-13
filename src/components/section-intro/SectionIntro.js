import { Container,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import commercial from '../../assets/img/gif/commercial.gif';
import { BsArrowRight } from 'react-icons/bs';

function SectionIntro(){
    return(
        <>
            <div className='section-intro'>
                <Container>
                        <Col md={12} className='section-intro-text'>
                            <h1 className='section-intro-title'>
                                Vou entregar o melhor conteúdo<br />
                                e experiência para seu cliente
                            </h1>
                            <div className='section-intro-content'>
                                <p>
                                    Você vai aproveitar cada lead criando uma experiência incrível <br />
                                    de navegação deixando sua marca inesquecível.
                                </p>
                            </div>
                            <Link to='/form'>
                                <Button className='intro-button'>
                                    Faça Acontecer &nbsp;<BsArrowRight />
                                </Button>
                            </Link>
                        </Col>
                </Container>
                <div className='intro-image'>
                    <Container className='intro-image-container'>
                        <div style=
                            {{  
                             backgroundImage:`url(${ commercial })`,
                             backgroundColor:'white',
                             backgroundPosition: 'center',
                             backgroundAttachment: 'local',
                             backgroundSize:'100%',
                             backgroundRepeat:'no-repeat',
                             border:'1px solid white',   
                             borderRadius:'10px',
                             padding:'30% 30% 25% 25%',
                             marginTop:'5%'
                         }}>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default SectionIntro;
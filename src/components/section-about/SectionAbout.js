import { Container,Row,Col,Image } from 'react-bootstrap';
import imgastronaut from '../../assets/img/sucesso-1.png';
import imgdev from '../../assets/img/icon-personal.jpg';

function SectionAbout(){
    return(
        <div className='section-about'>
            <Container>
                <Row>
                    <Col md={6}> 
                        <div>
                           <Image className='section-about-img' src={ imgastronaut }/>
                        </div>
                    </Col >

                    <Col md={6} className='section-about-content'>
                        <div className='section-about-align'>
                            <Row>
                                <Col className='section-about-icon-line' md={2}>
                                    <Image className='section-about-icon' src={ imgdev } />
                                </Col>
                                <Col md={10} className='section-about-icon-title'>
                                     <h3 className='section-about-font'>
                                        <span className='section-about-title-detail'>
                                            Sou desenvolvedor<br /> 
                                        </span>
                                            Fullstack Free-Lancer
                                     </h3>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <h1 className='section-about-subtitle-1'>
                                Conecto sua empresa <br />
                            </h1>
                            <h1 className='section-about-subtitle-2'>
                                ao mundo de novas possibilidades
                            </h1>
                        </div>
                        <div>
                            <p className='section-about-text'>
                                Minha missão é desenvolver <span className='section-about-detail-text'>soluções inovadoras e tecnológicas
                                que atendam as necessidades do mercado</span> ,criando um ambiente
                                eficaz e produtivo.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Col className='section-about-end-border'>
                    <div className='section-about-end'>
                        <br />
                        <div>
                            <p>
                                Construo soluções para que você empreendedor,<br />
                                <span className='section-about-end-text-detail'>
                                crie estratégias de negócio enquanto automatizo <br /> 
                                tarefas repetitivas ,</span> gerando um ambiente < br/>
                                de negócios produtivo e escalável. 
                            </p> 
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default SectionAbout;
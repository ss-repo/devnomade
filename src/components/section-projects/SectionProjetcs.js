import { Container,Row,Col,Image } from 'react-bootstrap';
import imgproject from '../../assets/img/theme/projeto-starter-4.png';

function SectionProjects(){
    return(
        <div className='section-projects'>
           <Container>
                <div className='section-projects-title'>
                    {/* <h1 className='section-projects-title-font'>Projetos</h1> */}
                </div>
                <div>    
                    <Row>
                        <Col md={6} className='section-projects-img'>
                            <Image className='section-projects-img-template' src={ imgproject }></Image>
                        </Col>
                        <Col md={6} className='section-projects-link'>
                           <div>
                             <h1 className='section-projects-link-title'>
                                Projeto Promocional<br />
                                <span className='section-projects-promotional-title'>
                                - Meu primeiro site -
                                </span>
                             </h1>
                           </div>
                           <div className='section-projects-link-content'>
                             <p className='section-projects-content-text'>
                              <span className='section-projects-promotional'>
                                Mega promoção de lançamento!!!
                              </span>
                                <br />
                                <br /> 
                                Tenha seu primeiro site com um super desconto: 
                                <br />
                                <br />
                                de: R$ 899,00
                                <br /> 
                                por apenas:&nbsp;
                                <span className='section-projects-promotional-value'>
                                 R$ 49,00 ( 94% OFF )
                                </span>
                                <br />
                                <br />
                                Clique abaixo em saiba mais, 
                                para aproveitar esta oportunidade.Promoção válida até dia 10/11/2022.
                                <br />
                                <a className='section-projects-link-promotional' href='/saibamais'>
                                    Saiba mais
                                </a>
                             </p>    
                           </div>
                        </Col>
                    </Row>
                </div>
           </Container>
        </div>
    )
}

export default SectionProjects;
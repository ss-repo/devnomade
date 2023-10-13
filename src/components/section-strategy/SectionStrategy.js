import { Container,Row,Col,Image } from 'react-bootstrap';
import imgbusiness from '../../assets/img/icon/icon-strategy/business.png';
import imgux from '../../assets/img/icon/icon-strategy/ux.png';
import imgdocument from '../../assets/img/icon/icon-strategy/document.png';
 
function SectionStrategy(){
    return (
        <>
            <Container className='section-strategy'>
                <div>
                   <h2 className='section-strategy-title'>
                        Tudo que voce precisa para um website perfeito.
                   </h2> 
                   <Row>
                    <Col lg={2}>
                        <div className='section-strategy-icon'>
                            <Image className='section-strategy-icon-img' src={ imgbusiness }></Image>
                        </div>
                    </Col>     
                    <Col lg={2}>
                        <p className='section-strategy-title-text'>Estratégias de Negócios</p>

                        <p className='section-strategy-content'>
                            Discutimos o que você esta 
                            tentando alcançar e 
                            colocamos metas em seu 
                            site planejando em como 
                            conseguir isso.
                        </p>
                    </Col>     
                    <Col lg={2}>
                        <div className='section-strategy-icon'>
                            <Image className='section-strategy-icon-img' src={ imgux }></Image>
                        </div>
                    </Col>     
                    <Col lg={2}>
                        <p className='section-strategy-title-text'>Experiência do Usuário</p>

                        <p className='section-strategy-content'>
                            Eu projeto seu site para ser
                            o mais fácil de usar 
                            possível,enquanto oriento 
                            os usuários em direção ao 
                            objetivo final.
                        </p>
                    </Col>     
                    <Col lg={2}>
                        <div className='section-strategy-icon'>
                            <Image className='section-strategy-icon-img' src={ imgdocument }></Image>
                        </div>
                    </Col>     
                    <Col lg={2}>
                        <p className='section-strategy-title-text'>Revisão do Site</p>
                        
                        <p className='section-strategy-content strategy-align-text'>
                           Certifico-me de que seu 
                           site está tendo o melhor 
                           desempenho revisando  
                           minuciosamente.  
                           Antes de fazer qualquer 
                           alteração.
                        </p>
                    </Col>     
                   </Row>
                </div>
            </Container>
        </>
    )
}

export default SectionStrategy;
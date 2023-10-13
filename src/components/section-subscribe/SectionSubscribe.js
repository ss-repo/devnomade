import { Container,Col,Row,Button } from 'react-bootstrap';
import backgroundsubscribe from '../../assets/img/background-subscribe.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SectionSubscribe(){
    return(
        <>
         <Container className='section-subscribe-container'>
            <div 
                style=
                {{
                     backgroundImage:`url(${ backgroundsubscribe })`,
                     backgroundPosition: "center",
                     backgroundRepeat:"no-repeat",
                     backgroundSize:"auto",
                     marginLeft:"-5px",
                     marginRight:"-5px",
                     border:"5px solid var(--color-blue-black)",
                     borderRadius:"15px"
                }} 
                className='section-subscribe'>
                 <Row>
                    <Col md={6} className='section-subscribe-col-1'>
                        <div className='section-subscribe-title'>
                            <h1>Como começar?</h1>
                        </div>
                        <div className='section-subscribe-text'>
                            <p>
                             Entre em contato para que eu conheça o seu   
                             produto e possamos discutir a melhor maneira
                             de ajuda-lo a atingir suas metas.
                             Vou desenvolver a solução ideal para você.
                            </p>
                        </div>
                        <Link to='/form'>
                            <Button className='section-subscribe-button'>
                                Evolua seu negócio &nbsp; <BsArrowRight />
                            </Button>
                        </Link>
                    </Col>
                    <Col md={6}></Col>    
                 </Row>
            </div>  
         </Container> 
        </>
    )
}
 
export default SectionSubscribe;
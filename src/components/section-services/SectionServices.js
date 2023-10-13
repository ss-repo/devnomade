import { useState } from 'react';
import { Container,Nav,Button,Row,Col,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';    
import { BsArrowUpRight } from 'react-icons/bs';
/*image*/
import imgsite from '../../assets/img/site-business.png';
import imgappweb from '../../assets/img/app-web.png';
import imgappmobile from '../../assets/img/app-mobile.png';
import imghost from '../../assets/img/server-host.png';
import imgmaketingdigital from '../../assets/img/marketing-digital.png';
/*icon*/
import imgsiteicon from '../../assets/img/icon/icon-service/site.png';
import imgautomation from '../../assets/img/icon/icon-service/automation.png';
import imgmobile from '../../assets/img/icon/icon-service/smartphone.png';
import imgcloud from '../../assets/img/icon/icon-service/cloud.png';
import imgmarketing from '../../assets/img/icon/icon-service/megafone.png';

function SectionServices(){
    const[title, setTitle] = useState('Tenha um site da sua empresa');
    const[content, setContent] = 
        useState('Sites são o cartão de visita da sua empresa,' 
            + ' além disso você também pode captar leads e' 
                + ' criar relacionamento para gerar seu funil de vendas.');
    const[img, setImg] = useState(imgsite);

    const handleSelect = (eventKey) =>{
        if(eventKey === '0'){
            setTitle('Tenha um site da sua empresa');
            setContent('Sites são o cartão de visita da sua empresa,' 
                + ' além disso você também pode captar leads e' 
                    + ' criar relacionamento para gerar seu funil de vendas.' );
            setImg(imgsite);

        }if(eventKey === '1'){
            setTitle('Automatize processos')
            setContent(' App Web são softwares completos para qualquer tipo de solução,' 
                + ' eles geralmente possuem banco de dados e complexidade' 
                    + ' para entregar o melhor que a tecnologia pode oferecer' 
                        + ' para seu negócio.');
            setImg(imgappweb); 

        }if(eventKey === '2'){
            setTitle('Marque presença na palma de mão do seu cliente')
            setContent('O App é a sua empresa na palma da mão do seu cliente' 
                + ' você pode oferecer serviços inovadores e quem sabe criar a próxima' 
                    + ' startup de sucesso.');
            setImg(imgappmobile);

        }if(eventKey === '3'){
            setTitle('Tenha sua empresa na web')
            setContent('Hospedagem é o serviço para que seu site ou aplicativo' 
                + ' fique disponivel na internet para seus clientes.');
            setImg(imghost);

        }if(eventKey === '4'){
            setTitle('Alcance mais clientes')
            setContent('Marketing Digital envolve vários serviços para que seu app' 
                + '  alcance todos os objetivos e metas para que ele foi desenvolvido.');
            setImg(imgmaketingdigital);
        }
    }
    return(
        <>
            <Container>
            <div className='section-services' id='services'>
                <h2>O que eu posso fazer por você e sua empresa.</h2>
            </div>
            <div className='section-services-menu'>
                <Nav variant='pills' defaultActiveKey='0' onSelect={ handleSelect }>
                    <Nav.Item>
                        <Nav.Link className='section-services-link' eventKey='0'>
                        <Image className='section-services-img-menu' src={ imgsiteicon } />
                            <span className='section-services-title-menu'>
                                &nbsp;
                                Sites
                            </span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='section-services-link section-services-align-custom' eventKey='1'>
                        <Image className='section-services-img-menu' src={ imgautomation } />
                            <span className='section-services-title-menu'>
                                &nbsp;
                                App Web
                            </span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='section-services-link' eventKey='2'>
                        <Image className='section-services-img-menu' src={ imgmobile } />
                            <span className='section-services-title-menu'>
                                &nbsp;
                                App Mobile
                            </span>
                            
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='section-services-link' eventKey='3'>
                        <Image className='section-services-title-menu' src={ imgcloud } />
                            <span className='section-services-title-menu'>
                                &nbsp;
                                Hospedagem
                            </span>
                            &nbsp;
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='section-services-link' eventKey='4'>
                        <Image className='section-services-title-menu' src={ imgmarketing } />
                            <span className='section-services-title-menu'>
                                &nbsp;
                                Marketing Digital
                            </span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div> 
            <Row>
                <Col md={6}>
                    <h2 className='section-services-title'>
                        { title }
                    </h2>
                    <p className='section-services-content'>
                        { content }
                    </p>
                    <Link className='section-services-form-link' to='/form'>
                        <Col md={9} className='d-grid'>
                            <Button className='section-services-button'> Quero saber mais &nbsp;<BsArrowUpRight/></Button>
                        </Col>
                    </Link>
                </Col>
                <Col md={6}>
                    <Image className='section-services-img' src={ img }></Image>
                </Col>
            </Row>   
            </Container>
        </>
    )
}

export default SectionServices;
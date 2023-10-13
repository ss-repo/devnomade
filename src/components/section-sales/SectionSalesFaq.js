import bannerfaq from '../../assets/img/banner/banner-faq.png';
import { Accordion,Image,Col } from 'react-bootstrap';

function SectionSalesFaq(){
    return(
        <>
        <Image className='section-sales-img-online-sub section-sales-margin-top' src={ bannerfaq }></Image>
        <Col md={6} className='section-sales-faq'>
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                            <h5>Como posso comprar este site ?</h5>             
                    </Accordion.Header>
                    <Accordion.Body>
                            <p className='section-sales-table-prices-text'>
                                Você pode comprar este produto através do botão de pagamento
                                ou se preferir pode entrar em contato através do whatsapp e 
                                combinar diretamente comigo o tipo de pagamento que mais atende
                                seus necessidades.
                            </p>           
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
            <Accordion defaultActiveKey={1}>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                            <h5>O que eu estou comprando exatamente ao adquirir o pacote starter ?</h5>             
                    </Accordion.Header>
                    <Accordion.Body>
                            <p className='section-sales-table-prices-text'>
                                Você está adquirindo o melhor site custo-benficio da internet.
                                Além disso este site possui:
                                <br />
                                - Três seções principais são a <b>página inicial, serviços e sobre a empresa</b>.
                                <br />    
                                - Site com <b>layout reponsivo</b>. 
                                <br />
                                - Contato via <b>whatsapp</b>.   
                                <br /> 
                                - Contato via <b>email</b>. 
                                <br />   
                                - Links das <b>redes sociais</b>.  
                                <br />  
                                - Layout com as <b>cores empresa, logo e material publicitário</b>.   
                                <br /> 
                                - <b>Textos customizados</b>.    
                            </p> 
                            <p className='section-sales-table-prices-text'>
                                Nesse plano a empresa está adquirindo uma cópia customizada com sua identidade visual e 
                                todas as ferramentas divulgadas nesta página. 
                            </p>        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
            <Accordion defaultActiveKey={3}>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>
                            <h5>Posso customizar este site ?</h5>             
                    </Accordion.Header>
                    <Accordion.Body>
                            <p className='section-sales-table-prices-text'>
                                Sim! Este site pode ser customizado ,entre em contato 
                                para saber mais. 
                            </p>               
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
            <Accordion defaultActiveKey={5}>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>
                            <h5>Posso adquirir somente o site sem o serviço de hospedagem ?</h5>             
                    </Accordion.Header>
                    <Accordion.Body>
                            <p className='section-sales-table-prices-text'>
                                Sim! Mas não é recomendado, a garantia do produto será somente de 
                                30 dias após a compra, qualquer coisa que vier a ocorrer após a
                                garantia será de responsábilidade única do proprietário do produto. 
                            </p>                   
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
            <Accordion defaultActiveKey={6}>
                <Accordion.Item eventKey='6'>
                 <Accordion.Header>
                            <h5>Posso marcar uma reunião para expor minha idéia ?</h5>             
                    </Accordion.Header>
                    <Accordion.Body>
                            <p className='section-sales-table-prices-text'>
                                Sim! Com certeza essa é uma ótima idéia para tirar suas dúvidas. 
                            </p>                   
                            <p className='section-sales-table-prices-text'>
                                Deixando claro que nosso contato será sempre por meios digitais.
                            </p>                   
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> 
            </Col>
        </>
    )
}

export default SectionSalesFaq;
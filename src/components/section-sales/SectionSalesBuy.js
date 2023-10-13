import { Row,Col,Table,Button } from 'react-bootstrap';
import { FaCheck } from "react-icons/fa";
import SectionSalesBuyModal from './SectionSalesBuyModal';
import SectionSalesBuyAccordion from './SectionSalesBuyAccordion';

function SectionSalesBuy(){
    return(
      <>
         <Row className='section-sales-table'>
            <Col md={3}></Col>
            <Col md={6} className='section-sales-tables-space'>
               <Table responsive border={1}>
                  <thead></thead>
                  <tbody>
                        <tr>
                           <td>
                              <div className='section-sales-table-prices'>
                                 <h5 className='section-sales-table-prices-text section-sales-promotional-text'>
                                       Starter
                                 </h5>
                                 <p className='section-sales-table-prices-text section-sales-promotional-text'>
                                       Site simples e leve, com design elegante, responsivo,<br />
                                       com alto nível de conversão e cores que valorizam<br />
                                       sua identidade visual.<br />
                                       (Com garantia de 12 meses junto com o <b>Pacote Hospedagem</b>).
                                 </p>
                                 <p className='section-sales-table-prices-text section-sales-old-price'>
                                       de: R$ 899,00
                                 </p>
                                 <h1 className='section-sales-table-prices-text section-sales-promotional-price'>R$49,00</h1> 
                                 <p className='section-sales-table-prices-text section-sales-promotional-text-bold'>
                                       Economia de 94% off
                                 </p>
                                 <p className='section-sales-table-prices-text section-sales-old-price'>
                                       + Pacote Hospedagem 12 meses - <b>33% off</b> <br />
                                       + Pacote Imagens e Videos - <b>100% off</b> <br />
                                       + Email Profissional Gratuito - <b>100% off (1º ano)</b> <br />
                                       + Domínio Gratuito - <b>100% off (1º ano)</b> <br />
                                       + Garantia 12 meses - <b>brinde (1º ano)</b>
                                 </p>
                                 <p className='section-sales-table-prices-text section-sales-old-price'>
                                       de R$ 2.499,00  
                                 </p>
                                 <h1 className='section-sales-table-prices-text section-sales-promotional-price'>R$ 849,00</h1>
                                 <p className='section-sales-table-prices-text section-sales-promotional-text-bold'>
                                       Economia de 66% off
                                 </p>
                                 <Col md={12} className='d-grid'>
                                    <SectionSalesBuyModal />
                                    <br />
                                    <Button href='https://mpago.la/2ZAXCfX' className='intro-button section-sales-button-purchase'>Comprar agora - Cartão de crédito</Button>
                                 </Col>
                                 <br />            
                                 <p className='section-sales-table-prices-text'>
                                    <FaCheck color='rgba(23,221,125,1)' />
                                    &nbsp;&nbsp;Site <b>Responsivo</b>
                                 </p>
                                 <p className='section-sales-table-prices-text'>
                                    <FaCheck color='rgba(23,221,125,1)' />
                                    &nbsp;&nbsp;Layout <b>Moderno</b>
                                 </p>
                                 <p className='section-sales-table-prices-text'>
                                    <FaCheck color='rgba(23,221,125,1)' /> 
                                    &nbsp;&nbsp;Links Principais: Home, Serviços e Sobre
                                 </p>
                                 <p className='section-sales-table-prices-text'>
                                    <FaCheck color='rgba(23,221,125,1)' /> 
                                    &nbsp;&nbsp;<b>Medias Sociais</b>
                                 </p>
                                 <p className='section-sales-table-prices-text'>
                                    <FaCheck color='rgba(23,221,125,1)' />  
                                    &nbsp;&nbsp;<b>WhatsApp</b>
                                 </p>
                                 <p className='section-sales-table-prices-text'>
                                    <FaCheck color='rgba(23,221,125,1)' /> 
                                    &nbsp;&nbsp;Sua Empresa <b>24h Na Web</b>
                                 </p>
                                 <p className='section-sales-table-prices-text'>
                                    <FaCheck color='rgba(23,221,125,1)' /> 
                                    &nbsp;&nbsp;<b>Garantia de 7 dias - pagamento</b>
                                    <br />
                                    (Se nosso produto não atender suas expectativas devolução integral do pagamento.)
                                 </p>
                                 <hr></hr>
                                 <h5 className='section-sales-table-prices-text'>
                                    Pacotes Adicionais
                                 </h5>
                                 <hr></hr>
                                 <SectionSalesBuyAccordion />
                              </div>
                           </td>
                        </tr>
                  </tbody>
               </Table>
             </Col>
             <Col md={3}></Col>
        </Row>
      </>
    )
}

export default SectionSalesBuy;
import { Accordion } from 'react-bootstrap';
import { FaCheck } from "react-icons/fa";

function SectionSalesBuyAccordion(){
    return(
    <>
        <Accordion defaultActiveKey={0}>
            <Accordion.Item eventKey='0'>
                <Accordion.Header >
                    <div className='section-sales-tables-package-title'>
                        <FaCheck color='rgba(23,221,125,1)' /> 
                        &nbsp;&nbsp;Pacote &nbsp;<b>Hospedagem</b>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <p className='section-sales-table-prices-text'>
                        1 mês - R$ 100,00 á vista 
                        <br />
                        ( 12 meses de hospedagem R$ 1200,00 )
                        <br />
                        <br />
                        12 meses - R$ 799,00  
                        <br />
                        ( de: R$ 99,00 por R$ 79,00 - <b>33% off</b>)
                        <br />
                        <br />
                        <b>Email profissional gratuito</b> (valor de R$ 149,90/ano) - primeiro ano
                        <br/>
                        <b>Domínio gratuito</b> (valor de R$ 99,99/ano)
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={1}>
            <Accordion.Item eventKey='1'>
                <Accordion.Header>
                    <div className='section-sales-tables-package-title'>
                        <FaCheck color='rgba(23,221,125,1)' />  
                        &nbsp;&nbsp;Pacote &nbsp;<b>Imagens e Videos</b>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <p className='section-sales-table-prices-text'>
                        Pacote imagens - 5 imagens - R$ 50,00
                        <br />
                        Pacote video - 1 video - R$ 100,00
                        <br />
                        <br />
                        Combo 5 imagens e 1 video - R$ 150,00 
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
    )
}

export default SectionSalesBuyAccordion;
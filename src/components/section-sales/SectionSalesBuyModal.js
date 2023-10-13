import React, { useState } from 'react';
import { Button,Modal,Image } from 'react-bootstrap';
import imgqrpix from '../../assets/img/pix/QRCodePIXMercadoPago.png';
import imgseguranca from '../../assets/img/seguranca-1.jpg';

function SectionSalesBuyModal(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
    <>
     <Button onClick={ handleShow } className='intro-button section-sales-button-purchase button-pix'>Comprar agora - PIX</Button>

     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>      
        <Modal.Title>Pagamentos com PIX</Modal.Title>
     </Modal.Header>
     <Modal.Body>        
        <Image className='payment-img-pix' src={ imgqrpix }></Image>
        <b>Instruções:</b>
        <br />
        Abra o app do seu banco,na área do PIX,
        procure por <b>Leitor de QRCODE</b>.
        <br />
        1 - Aponte a câmera para o QRCode.
        <br />
        2 - Digite o valor de <b>R$849,00</b>.
        <br />
        3 - Confirme o pagamento em nome de Sergio Silveira Junior.
        <br />
        <br />
        <b>Problemas com QRCode:</b>
        <br />
        Copie e cole a Chave PIX 
        <br />
        <span className='payment-qrcode'>6ec49812-2c5b-4513-96a0-2a0f1c2bf3fe</span>
        <br />
        <br />
        Após o pagamento envie o comprovante por WhatsApp e 
        aguarde o retorno.
        <br />
        <br />
        <b>Pagamento Seguro</b>
        <br />
        Sistema de pagamento totalmente seguro, garantido 
        pelo mercado pago e banco central.
        <br />
        <Image className='payment-img-seguranca' src={ imgseguranca }></Image>
     </Modal.Body>
     <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
         Fechar
      </Button>
     </Modal.Footer>
     </Modal>
    </>
    )
}

export default SectionSalesBuyModal;
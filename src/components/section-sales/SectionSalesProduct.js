import { Image,Row,Col,Ratio,Button } from 'react-bootstrap';
import bannerproduto from '../../assets/img/banner/banner-produto-1.png';
import imgmobile from '../../assets/img/img-cel-1.png';
import bannerdesign from '../../assets/img/banner/mobile-1.png';
import bannerwhats from '../../assets/img/banner/banner-whats.png';
import banneremail from '../../assets/img/banner/banner-email.png';
import bannerlink from '../../assets/img/banner/banner-link.png';

function SectionSalesProduct(){
    return(
        <>
         <Image className='section-sales-img-online' src={ bannerproduto }></Image>
         <p className='section-sales-text'>
             Comece a se destacar agora mesmo,tenha um site que potencialize todos os 
             diferenciais que sua empresa possui.Um site que valoriza a sua marca,
             que demonstra todo o cuidado que você tem em atender seu cliente oferecendo 
             os melhores produtos do mercado.
         </p>

         <h1 className='section-sales-title'>
             O melhor site <span className='section-sales-text-decoration'>custo-benefício</span> 
             &nbsp;para iniciar seus projetos
         </h1>
                
         <Image className='section-sales-img-online-sub' src={ bannerdesign }></Image>
  
         <div className='secton-sales-ratio'>
             <Ratio aspectRatio='16x9'>
                 <iframe src='https://player.vimeo.com/video/762396433?h=5ff34a0c50&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' width='1920' height='1040'  allow='autoplay; fullscreen; picture-in-picture' title='Responsividade Landing Page'></iframe>
             </Ratio>
         </div>
                
         <p className='section-sales-text section-sales-space'>
             Um design responsivo contribui para uma melhor experiência do usuário. 
             Quando seu design é bem feito, as pessoas não enfrentam dificuldades ao 
             abrir seu site em outros dispositivos. 
             Eles não precisam ampliar nem encolher o site.
         </p>
         <Image className='section-sales-img-mobile' src={ imgmobile }></Image>

         <Image className='section-sales-img-online-sub section-sales-margin-top' src={ bannerwhats }></Image>
         <p className='section-sales-text'>
             O icone do whatsapp fica fixo na tela para que a qualquer hora que 
             seu cliente desejar entrar em contato, ele encontre uma forma fácil 
             e moderna para relacionar com a sua empresa.
             Você pode usar o WhatsApp ou WhatsApp Business você escolhe qual ferramenta
             mais se adequa a sua demanda de trabalho.
         </p>

         <Image className='section-sales-img-online-sub section-sales-margin-top' src={ banneremail }></Image>
         <p className='section-sales-text'>
             No site o cliente também pode encontrar um botão de contato onde o 
             email da empresa fica cadastrado, assim caso o cliente queira enviar um 
             email é só clicar no botão e enviar.
         </p>

         <Image className='section-sales-img-online-sub section-sales-margin-top' src={ bannerlink }></Image>
         <p className='section-sales-text'>
             A estrutura de links principais do projeto são,
             página principal,serviços e sobre, 
             links das redes sociais já estão incluidos.
         </p>
         <br />
         <Row>
             <Col md={4}></Col>
             <Col md={4} className='d-grid'>
                 <Button className='intro-button section-sales-button-test'>Testar Site</Button>
             </Col>
             <Col md={4}></Col>
         </Row>
         <br />
        </>
    )
}

export default SectionSalesProduct;
import { Image,Row,Col } from 'react-bootstrap';
import imgcredibilidade from '../../assets/img/credibilidade.png';
import imgalcance from '../../assets/img/alcance.png';
import imgvenda from '../../assets/img/venda.png';
import imgtempo from '../../assets/img/tempo.png';
import imgmarca from '../../assets/img/marca.png';
import imgcontato from '../../assets/img/contato.png';
import imgatendimento from '../../assets/img/atendimento.png';
import imganalise from '../../assets/img/analise.png';
import bannersitereasons from '../../assets/img/banner/banner-site-title-2.png';

function SectionSalesReasons(){
    return(
        <>
        <Image className='section-sales-img-online' src={ bannersitereasons }></Image>
               
               <Row>
                   <Col md={2}></Col>
                   <Col md={2}>
                       <Image className='section-sales-img-title' src={ imgcredibilidade }></Image>
                   </Col>
                   <Col md={6}>
                       <p className='section-sales-img-title-text'>
                           Se o site da sua empresa possui um design atualizado e funcional, 
                           demonstra a preocupação da sua companhia em receber bem o cliente e 
                           atender às necessidades dele em todos os cenários.
                       </p>
                   </Col>
                   <Col md={2}></Col>
               </Row>
               <br />
               
               <Row>
                   <Col md={2}></Col>
                   <Col md={2}>
                       <Image className='section-sales-img-title' src={ imgalcance }></Image>
                   </Col>
                   <Col md={6}>
                       <p className='section-sales-img-title-text'>
                       Um dos principais motivos para ter um site da sua empresa é a possibilidade 
                       de aumentar o seu alcance.Ter um site da sua empresa é deixar a sua 
                       loja disponível para que todas essas pessoas possam te encontrar.
                       </p>
                   </Col>
                   <Col md={2}></Col>
               </Row>
               <br />
               
               <Row>
                   <Col md={2}></Col>
                   <Col md={2}>
                       <Image className='section-sales-img-title' src={ imgmarca }></Image>
                   </Col>
                   <Col md={6}>
                       <p className='section-sales-img-title-text'>
                           Se você deseja que a sua marca seja vista, lembrada e falada, 
                           ela precisa ser fortalecida. Ter um site da sua empresa, 
                           é posicioná-la entre outras marcas, com a possibilidade de 
                           destacar os seus diferenciais e motivos pelos quais os 
                           consumidores devem te escolher.
                       </p>
                   </Col>
                   <Col md={2}></Col>
               </Row>
               <br />

               <Row>
                   <Col md={2}></Col>
                   <Col md={2}>
                       <Image className='section-sales-img-title' src={ imgvenda }></Image>
                   </Col>
                   <Col md={6}>
                       <p className='section-sales-img-title-text'>
                           Por isso é tão importante ter um site da sua empresa receptivo e atualizado.
                           Ele será responsável por cativar aquele visitante. Uma ótima maneira de fazer 
                           isso é com a criação de Landing Pages.
                       </p>
                   </Col>
                   <Col md={2}></Col>
               </Row>
               <br />
               
               <Row>
                   <Col md={2}></Col>
                   <Col md={2}>
                       <Image className='section-sales-img-title' src={ imgcontato }></Image>
                   </Col>
                   <Col md={6}>
                       <p className='section-sales-img-title-text'>
                           Criar um relacionamento com os seus clientes, é um dos melhores motivos 
                           para ter um site da sua empresa. Estabelecer esse relacionamento é a 
                           melhor maneira de conquistar novos clientes e fidelizar aqueles que 
                           já estão ativos.
                       </p>
                   </Col>
                   <Col md={2}></Col>
               </Row>
               <br />
               
               <Row>
                   <Col md={2}></Col>
                   <Col md={2}>
                       <Image className='section-sales-img-title' src={ imgtempo }></Image>
                   </Col>
                   <Col md={6}>
                       <p className='section-sales-img-title-text custom-text-time'>
                           Responder constantemente às mesmas questões levantadas em redes sociais 
                           pode se tornar uma tarefa exaustiva e que toma muito do seu tempo.
                           No seu site, você pode criar uma aba “FAQ” (Frequently asked questions). 
                           O FAQ é uma área onde você pode deixar registradas as principais perguntas 
                           feitas pelo seu consumidor, seguidas pelas suas respostas.
                       </p>
                   </Col>
                   <Col md={2}></Col>
               </Row>
               <br />

               <Row>
                   <Col md={2}></Col>
                   <Col md={2}>
                       <Image className='section-sales-img-title' src={ imgatendimento }></Image>
                   </Col>
                   <Col md={6}>
                       <p className='section-sales-img-title-text'>
                           Ter um site da sua empresa é manter um representante de vendas ativo 24 horas,
                           sem ter que pagar um alto custo com salário,impostos,horas extras e o melhor 
                           nunca se cansa.
                       </p>
                   </Col>
                   <Col md={2}></Col>
               </Row>
               <br />
               
               <Row>
                   <Col md={2}></Col>
                   <Col md={2}>
                       <Image className='section-sales-img-title' src={ imganalise }></Image>
                   </Col>
                   <Col md={6}>
                       <p className='section-sales-img-title-text'>
                           Se a sua instituição possui um site, você pode utilizar plataformas 
                           como o Google Analytics e o Google Search Console para obter métricas 
                           que apontam os seus resultados ao longo de um determinado período.
                       </p>
                   </Col>
                   <Col md={2}></Col>
               </Row>
               <br />

               <p className='section-sales-text'>
                   Acredito que todos esses motivos são o suficiente para que você entenda a 
                   importância de se ter um site.
               </p>
               <p className='section-sales-text'>    
                   As grandes empresas foram as primeiras a se adequar a esse novo mercado online ,
                   gastando milhares de reais para alcançar seus objetivos.
               </p>
               <p className='section-sales-text'>    
                   O que eu venho te oferecer são esses mesmos benefícios a um custo extremamente menor,
                   para que você também mesmo sendo um pequeno empreendedor possa se destacar e alcançar novos clientes.
               </p>
        </>
    )
}

export default SectionSalesReasons;
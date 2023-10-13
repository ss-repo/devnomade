import { Container,Row,Col,Image,Button } from 'react-bootstrap';
import imglogica from '../../assets/img/blog/banner-blog-7.png';
import imgprogramacao from '../../assets/img/blog/banner-blog-3.png';

function SectionBlog(){
    return(
        <div className='section-blog-main'>
            <Container className='section-blog'>
                <div>
                    <a href='artigologicaum'>
                        <Image className='section-blog-img' src={ imglogica }></Image>
                    </a>
                </div>
                <Row>
                    <Col md={4} className='section-blog-articles'>
                        <Image className='section-blog-articles-img' src={ imgprogramacao }></Image>
                        <h5 className='section-blog-articles-title'>Primeiros passos na programação - part.2</h5>
                        <p className='section-blog-articles-data'>25/10/22</p>
                        <p className='section-blog-articles-text'>
                            Agora que você já sabe como funciona o pensamento computacional,
                            vamos exercitar e aplicar todos fundamentos da lógica basica...
                        </p>
                        <a href='artigologicadois'>
                            <Button className='section-blog-button section-subscribe-button'>
                               Saiba Mais
                            </Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default SectionBlog;
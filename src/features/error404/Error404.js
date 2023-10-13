import { Container,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error404 from '../../assets/img/error/error-404-3.png';

function Error404(){
    return(
        <div className='error'>
            <Container>
                <Col className='error-message'>
                    <h1>Ops!Parece que essa página não existe...</h1>
                    <p>Clique em <Link className='error-link' to='/'>Home</Link> para voltar!</p>
                </Col>
                <Col 
                style=
                {{
                    backgroundImage:`url(${ error404 })`,
                    backgroundPosition: 'center',
                    backgroundAttachment: 'local',
                    backgroundSize:'50%',
                    backgroundRepeat:'no-repeat',
                    borderRadius:'10%',
                    padding:'20%',
                    marginTop:'5%'
                }}
                >
                </Col>
            </Container>
        </div>
    )   
}

export default Error404;
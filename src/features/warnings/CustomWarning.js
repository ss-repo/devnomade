import { Container,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomWarning(props){

    const linkDefault = '#';

    return(
        <div className='warnings warnings-custom'>
            <Container>
                <Col className='warnings-message'>
                    <h1> - { props.title } - </h1>
                    <p className='warning-message-content'> { props.message } </p>
                    <p>
                        <Link className='warnings-link' to={ props.link || linkDefault }> { props.nameLink } </Link>
                    </p>
                </Col>
                { props.children }
            </Container>
        </div>
    )
}

export default CustomWarning;
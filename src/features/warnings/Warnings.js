import { Col } from 'react-bootstrap';
import warning from '../../assets/img/warnings/developing.gif';
import CustomWarning from './CustomWarning';

function Warnings(){
    return(
        <>
            <CustomWarning 
                title = 'Em desenvolvimento'
                message = 'Assine nossa newsletter para mais informações'
            >
              <Col md={{ span: 8, offset: 2}} style=
                {{
                    backgroundImage:`url(${ warning })`,
                    backgroundPosition: 'center',
                    backgroundAttachment: 'local',
                    backgroundSize:'110%',
                    backgroundRepeat:'no-repeat',
                    padding:'25% 0 25% 0',
                    marginTop:'5%',
                    border:'5px solid var(--color-blue-black)',
                    borderRadius:'10px'
                }}>
              </Col>
            </CustomWarning>
        </>
    )
}

export default Warnings;
import { Container,Col,Row,Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import FormTitle from './FormTitle';
import MessageErrors from './MessageErrors';
import { requestAPIFormEmail } from '../../features/email/APIFormEmail';
import { fireAlert } from '../../features/alert-custom/AlertCustom';
import { deleteCookiesForm } from '../../features/cookies/FormCookies'; 

function SectionForm(){

    const { register, handleSubmit, getValues,  setValue,  formState: { errors } } = useForm({
        defaultValues: {
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            phoneNumber: localStorage.getItem('phoneNumber'),
            email: localStorage.getItem('email'),
            message: localStorage.getItem('message')
        }
    });
    
    const onSubmit = (data) => {
        requestAPIFormEmail(data);
        fireAlert('success','Formulário enviado com sucesso!')
        setValue('firstName','');
        setValue('lastName','');
        setValue('email','');
        setValue('phoneNumber','');
        setValue('message','');
        
        deleteCookiesForm();
    }

    const insertCookies = () =>{

        if(getValues('firstName') !== null){
            localStorage.setItem('firstName',getValues('firstName'));
        }
        
        if(getValues('lastName') !== null){
            localStorage.setItem('lastName',getValues('lastName'));
        }
        
        if(getValues('phoneNumber') !== null){
            localStorage.setItem('phoneNumber',getValues('phoneNumber'));
        }
        
        if(getValues('email') !== null){
            localStorage.setItem('email',getValues('email'));
        }
        
        if(getValues('message') !== null){
            localStorage.setItem('message',getValues('message'));
        }
        
    }

    const validateFirstName =  { 
        ...register('firstName',
        {
            pattern: /^[A-Za-z]+$/i,
            required: true,
            maxLength: 100 
        }
    )};

    const validateLastName =  { 
        ...register('lastName',
        {
            pattern: /^[A-Za-z]+$/i,
            required: true,
            maxLength: 100 
        }
    )};

    const validatePhoneNumber = { 
        ...register('phoneNumber',
        { 
            required: true,
            minLength: 11,
            maxLength: 20
        }
    )};

    const validateEmail = { 
        ...register('email',
        { 
            required: true,
            maxLength: 100
        }
    )};

    const validateMessage =  { 
        ...register('message',
        {
            required: true,
            maxLength: 500
        }
    )}; 
    
    return(
        <div className='form'>
            <Container>
                <Col>
                    <FormTitle />
                </Col>
                <Col md={{ span: 8, offset: 2}} className='form-content'>
                    <div className='form-border'>
                        <Form onSubmit={ handleSubmit( onSubmit ) }>
                            <Row className='mb-3'>
                                <Form.Group as={Col} md={6}>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type= 'text' 
                                        placeholder='Ex: Jorge'
                                        { ...validateFirstName }
                                        onBlur={ insertCookies }
                                    />
                                    {
                                        errors.firstName 
                                            && <MessageErrors 
                                                field = 'Nome' 
                                                specificMessage = 'Não use espaços em branco.'/>
                                    }
                                </Form.Group>

                                <Form.Group as={Col} md={6}>
                                    <Form.Label>Sobrenome</Form.Label>
                                    <Form.Control 
                                        type= 'text' 
                                        placeholder='Ex: Silva'
                                        className ='form-last-name'
                                        { ...validateLastName }
                                        onBlur={ insertCookies }
                                    />
                                    {
                                        errors.lastName 
                                            && <MessageErrors 
                                                field = 'Sobrenome' 
                                                specificMessage = 'Não use espaços em branco.' />
                                    }
                                </Form.Group>
                            </Row> 

                            <Form.Group className='mb-3'>
                                <Form.Label>Telefone(DDD+numero) - WhatsApp</Form.Label>
                                <Form.Control 
                                    type='number'
                                    placeholder='Ex: 11999112213' 
                                    { ...validatePhoneNumber }
                                    onBlur={ insertCookies }
                                />
                                {
                                    errors.phoneNumber 
                                        && <MessageErrors 
                                                field = 'Telefone' 
                                                specificMessage = 'Use somente numeros ,não use simbolos e espaços em branco.'
                                            />
                                }
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type='email'  
                                    placeholder='Ex: jorge.silva@gmail.com'
                                    { ...validateEmail }
                                    onBlur={ insertCookies }
                                />
                                {
                                    errors.email 
                                        && <MessageErrors 
                                            field = 'Email'/>
                                }
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Projeto</Form.Label>
                                <Form.Control 
                                    as='textarea' 
                                    rows={5} 
                                    placeholder='Me explique de forma simples e objetiva seu projeto'
                                    { ...validateMessage }
                                    onBlur={ insertCookies } 
                                />
                                {
                                    errors.message 
                                        && <MessageErrors 
                                            field = 'Projeto' 
                                            specificMessage = 'Máximo de 500 caracteres'/>
                                }
                            </Form.Group> 

                             <Button className='form-button-submit' type='submit'>
                                Enviar
                            </Button>                  
                        </Form>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default SectionForm;
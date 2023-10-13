
function MessageErrors(props){
    return(
        <>
            <p className='errors'>
                Por favor preencha o campo  - { props.field } - 
                { props.characters } <br />
                { props.specificMessage }
            </p>
        </>
    )
}

export default MessageErrors;
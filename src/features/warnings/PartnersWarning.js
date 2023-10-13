import CustomWarning from './CustomWarning';

function PartnersWarning(){
    return(
    <div className='warning-partner-content'>
        <CustomWarning
            title = 'Programa de Parceria'
            message = 'Nesse momento estamos elaborando nossa política para parceiros.'
         >
            <p className='warning-partner-msg'>
                Para maiores informações entre em contato pelo email:atendimentodevnomade@gmail.com
            </p>
         </CustomWarning>
    </div>
    )
}

export default PartnersWarning;
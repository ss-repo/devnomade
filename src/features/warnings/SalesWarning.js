import CustomWarning from "./CustomWarning";

function SalesWarning(){
    return(
        <div className='message'>
            <CustomWarning
                title = 'Obrigado por efetuar sua compra'
                link = '/' 
                nameLink = 'Voltar ao menu principal'
            >
            </CustomWarning>
        </div>
    )
}

export default SalesWarning;
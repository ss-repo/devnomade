import { Image } from 'react-bootstrap';
import bannersiteforyou from '../../assets/img/banner/banner-site-title-3.png';

function SectionSalesForYou(){
    return(
        <>
        <Image className='section-sales-img-site' src={ bannersiteforyou }></Image>
            <p className='section-sales-text'>
                Se sua empresa não tem um site ou se seu site está com um layout 
                que não é reponsivo, com design antiquado, cores que não harmonizam,
                não valorizam sua identidade visual e você deseja moderniza para 
                atender melhor seu cliente este produto com certeza é para você.
            </p>  
            <p className='section-sales-text'>  
                Se você deseja um site que aumente o seu potencial de vendas e que 
                seja um promotor virtual que funcione 24 horas 7 dias 
                por semana, nos finais de semana e feriados sem reclamar ou cobrar
                hora extra esse site é para você.
            </p>
            <p className='section-sales-text'>  
                Se você quer uma solução simples e testada com custo baixíssimo 
                e um alto nível de conversão de clientes, 
                esse site com certeza é para você.
            </p>
        </>
    )
}

export default SectionSalesForYou;
import { Image } from 'react-bootstrap';
import bannersiteinitial from '../../assets/img/banner/banner-site-title-1.png';
import imgmktmobile from '../../assets/img/msg-mobile.png';

function SectionSalesIntro(){
    return(
        <>
         <Image className='section-sales-img-site' src={ bannersiteinitial }></Image>
               <p className='section-sales-text'>
                   Hoje nós sabemos que a maioria da população brasileira,
                   interage com as marcas através de dispositivos móveis.
               </p>
               <p className='section-sales-text'>
                   Então vamos aos números:
               </p>
               <p className='section-sales-text'>
                   São 242 milhões de celulares inteligentes em uso no país, 
                   que tem pouco mais de 214 milhões de habitantes, 
                   de acordo com o IBGE. 
                   A pesquisa mostra que, ao adicionar notebooks e tablets, 
                   são ao todo 352 milhões de dispositivos portáteis no Brasil, 
                   o equivalente a 1,6 por pessoa.
               </p>
               <p className='section-sales-text'>
                   Isso mostra todo o potencial de se ter uma empresa com presença online,
                   é um mercado gigante.
                   <br />
                   E mostra também que provavelmente sites que não são adaptados a 
                   telas menores são menos acessados,isso quer dizer 
                   menos clientes interagindo,descobrindo e redescobrindo a sua marca.
               </p>
               <Image className='section-sales-img-mkt' src={ imgmktmobile }></Image>
               <p className='section-sales-text'>
                   Não quero te assustar mas provavelmente, pode ser que sua marca
                   não exista para milhares de pessoas.Além disso você esta perdendo
                   a chance de mostrar todo seu potencial em escala global.
               </p>
        </>
    )
}

export default SectionSalesIntro;
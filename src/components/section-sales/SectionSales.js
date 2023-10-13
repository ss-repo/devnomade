import { Container,Image } from 'react-bootstrap';
import SectionSalesIntro from './SectionSalesIntro';
import SectionSalesFaq from './SectionSalesFaq';
import SectionSalesReasons from './SectionSalesReasons';
import SectionSalesProduct from './SectionSalesProduct';
import SectionSalesForYou from './SectionSalesForYou';
import SectionSalesBuy from './SectionSalesBuy';
import imgbanner from '../../assets/img/banner-3.png';

function SectionSales(){
    return(
        <>
         <div className='section-sales'>
                <Container className='section-sales-container'>
                    <Image className='section-sales-img' src={imgbanner}></Image>
                    <SectionSalesIntro />
                    <SectionSalesReasons />
                    <SectionSalesProduct />
                    <SectionSalesForYou />
                    <SectionSalesBuy />
                    <SectionSalesFaq />
                </Container>
         </div>
        </>
    )
}

export default SectionSales;
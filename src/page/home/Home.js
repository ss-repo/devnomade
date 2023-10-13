import SectionIntro from "../../components/section-intro/SectionIntro";
import SectionServices from "../../components/section-services/SectionServices";
import SectionStrategy from "../../components/section-strategy/SectionStrategy";
import SectionSubscribe from "../../components/section-subscribe/SectionSubscribe";

function Home(){
    return(
        <>
           <SectionIntro />
           <SectionStrategy />
           <SectionServices />
           <SectionSubscribe />
        </>
    )
}

export default Home;
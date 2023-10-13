import { Container,Image,Button } from 'react-bootstrap';
import imglogica from '../../assets/img/blog/banner-blog-7.png';
import imgarticle1 from '../../assets/img/blog/article/blog-article-2.png';
import imgarticle2 from '../../assets/img/blog/article/blog-article-3.png';
import imgarticle3 from '../../assets/img/blog/article/blog-article-4.png';
import imgarticle4 from '../../assets/img/blog/article/blog-article-5.png';

function SectionBlogArticle1(){
    return(
        <div className='section-blog-article'>
          <Container>
            <Image className='section-blog-article-img' src={ imglogica }></Image>
            <div className='section-blog-article-text'>
             <h2 className='section-blog-article-title'>O que é pensamento computacional ?</h2>   
             <p>
              <b className='color-bold'>
               É a habilidade de mobilizar os conhecimentos para solucionar os 
               problemas com eficiência, a partir do uso da tecnologia.
              </b> 
               Para isso, é preciso dominar os fundamentos da computação, 
               bem como explorá-los de forma crítica, criativa e estratégica. 
             </p>
             <p>
               Assim, o pensamento computacional permite encontrar soluções não 
               apenas no que se refere à apropriação da tecnologia, mas também 
               em relação às demais áreas do conhecimento.
             </p>
             <p>
               O pensamento computacional tem alguns pilares. São eles:
             </p>
             <p>
               <b className='color-bold'>decomposição</b> — se refere à habilidade de decompor um problema 
               grande em partes menores, o que facilita a sua compreensão e resolução;     
             </p>
             <p>
               Quando separamos um problema em partes menores, conseguimos entender com mais nitidez o que 
               está acontecendo, o que faz com que seja resolvido de uma forma mais rápida e simples.
             </p>
             <br />
             <Image className='section-blog-article-img-text' src={ imgarticle1 }></Image>
             <br />
             <p>
               <b className='color-bold'>abstração</b> — é a capacidade de encontrar o que é mais relevante 
               em uma situação, filtrando o que pode ser deixado de lado;
             </p>
             <p>
               Geralmente, quando temos um problema, muitas vezes algumas partes acabam se tornando menos 
               prioritárias. Ao tirarmos alguns pontos, conseguimos nos concentrar melhor no que precisa ser resolvido primeiro. 
             </p>
             <br />
                <Image className='section-blog-article-img-text' src={ imgarticle2 }></Image>
             <br />
             <p>
               <b className='color-bold'>reconhecimento de padrões</b> — o pensamento computacional, 
               em grande medida, funciona por padrões. Assim, é importante reconhecer repetições e similaridades para buscar soluções;
             </p>
             <p>
               Imaginando o seguinte cenário — no qual temos um quebra cabeça —, para facilitar a montagem podemos tentar definir dois 
               padrões como: as cores das peças e as peças que formam o contorno do jogo, para que no momento em que começar o processo 
               de montagem podemos iniciar pelas peças que já têm algum padrão.
             </p>
             <br />
             <Image className='section-blog-article-img-text' src={ imgarticle4 }></Image>
             <br />
             <p>
               <b className='color-bold'>pensamento algorítmico</b> — está ligado ao uso da lógica e da racionalidade para criar soluções, 
               a partir da sistematização.
             </p>
             <p>
               Suponhamos que vamos fazer um bolo. Muitas vezes, costuma-se seguir uma determinada receita para obtermos o resultado correto. 
               Sendo assim, se não seguirmos, pode ocorrer o fracasso da receita.
             </p>
             <br />
             <Image className='section-blog-article-img-text' src={ imgarticle3 }></Image>
             <br />
             <h2 className='section-blog-article-title'>Programação e pensamento computacional ? Entenda a relação e importância !</h2>
             <p>
               O mundo da programação consiste em várias resoluções de problemas no cotidiano, 
               seja ele simples ou mais complexo. Ao fazer uma relação com o pensamento computacional, 
               podemos encontrar um complemento entre eles.
             </p>   
             <p>
               No momento em que um desenvolvedor ou desenvolvedora seleciona um problema para resolver 
               ou até mesmo uma pessoa cliente acaba chegando com um problema, ele precisa ser resolvido.
             </p>
             <p>
               <b className='color-bold'>
               Quando a pessoa programadora possui esse pensamento estruturado em sua mente, isso pode fazer com que, 
               de certa forma, esse problema seja resolvido de uma maneira mais fácil
               </b>, analisando, estruturando, pensando nas bases do pensamento computacional e 
               conseguindo chegar na solução de uma maneira mais simples e assertiva.
             </p>
             <p>
               Ao iniciar a matéria de programação na escola, pode-se dizer que um dos primeiros pontos a ser 
               ensinado é “algoritmo“, fazendo com que a pessoa já tenha que ter uma estrutura em mente de 
               como solucionar um determinado problema.
             </p>
             <p>
               Pensando no cenário no qual uma pessoa cliente contata a pessoa desenvolvedora e fala que precisa 
               de um software para uma lanchonete, ela precisará ter também um pensamento crítico para a criação 
               desse software, bastando não apenas desenvolver. 
               É necessário que haja compreensão de todas as dores da pessoa cliente, suas necessidades e o que 
               realmente deseja como produto final. 
             </p>
             <p>
               Após todo esse onboarding, deverá existir todo um passo a passo interno, de análise e estruturação, 
               para depois o sistema começar a ser desenvolvido.
             </p>
             <h2 className='section-blog-article-title'>Considerações Finais</h2>
             <p>
               Este artigo não tem a finalidade de abordar esse tema de forma abrangente por isso 
               se você ainda têm dúvidas sobre pensamento computacional para que serve e como aplicar,
               existem milhares de páginas que abordam este assunto.
             </p>
             <p>
               Espero que esse artigo tenha te ajudado a dar os primeiros passos no pensamento computacional.
             </p>
             <h2 className='section-blog-article-title'>Links Referência</h2>
             <p>
               UNIVESP Pensamento Computacional: Introdução - 
               <a className='section-blog-article-link' href='https://www.youtube.com/watch?v=s9Q7Ik_sle4&t=63s'>
                  https://www.youtube.com/watch?v=s9Q7Ik_sle4&t=63s
               </a>
               <br />
               UNIVESP Pensamento Computacional: Playlist - 
               <a className='section-blog-article-link' href='https://www.youtube.com/watch?v=J3JhWU4_H_Y&list=PLxI8Can9yAHdhRx3TIqX_B3C20ETZEV_V'>
                  https://www.youtube.com/watch?v=J3JhWU4_H_Y&list=PLxI8Can9yAHdhRx3TIqX_B3C20ETZEV_V
               </a>
               <br />
               USP ICMC: A compreensão do Pensamento Computacional através do espaço habitado com uso da ferramenta Google Maps 
               - 
               <a className='section-blog-article-link' href='https://especializacao.icmc.usp.br/documentos/tcc/patricia_paula.pdf'>
                  https://especializacao.icmc.usp.br/documentos/tcc/patricia_paula.pdf
               </a>
               <br />
               Autores:
               Patrícia Bárbara de Paula, Seiji Isotani, Armando Maciel Toda
             </p>
             <a href='blog'>
               <Button className='section-blog-article-button section-subscribe-button'>Voltar</Button>
             </a>
            </div>
          </Container>
        </div>
    )
}

export default SectionBlogArticle1;
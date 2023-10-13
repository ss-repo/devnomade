import { Container,Image,Button } from 'react-bootstrap';
import imgbannerblog3 from '../../assets/img/blog/banner-blog-9.png';
import imgarticle7 from '../../assets/img/blog/article/blog-article-13.png';
import imgarticle8 from '../../assets/img/blog/article/blog-article-14.png';
import imgarticle9 from '../../assets/img/blog/article/blog-article-15.png';


function SectionBlogArticle2(){
    return(
        <div className='section-blog-article'>
            <Container>
                <Image className='section-blog-article-img' src={ imgbannerblog3 }></Image>
                <div className='section-blog-article-text'>
                    <h2 className='section-blog-article-title'>O que é a lógica de programação ? </h2>  
                    <p>
                     <b className='color-bold'>Lógica de programação é a organização coesa de uma sequência de instruções voltadas à resolução de um problema, 
                     ou à criação de um software ou aplicação.</b>
                    </p> 
                    <p>
                     A lógica de programação é o conhecimento anterior a qualquer outro quando falamos em desenvolvimento web porque é a 
                     partir dele que os aprendizados posteriores, como por exemplo o das linguagens de programação, farão sentido. 
                    </p>
                    <p>
                     Cada linguagem tem suas próprias particularidades, como sua sintaxe, seus tipos de dados e sua orientação, mas a lógica 
                     por trás de todas é a mesma.
                    </p>
                    <p>
                     Em outras palavras, dominar a lógica de programação é a porta de entrada para tornar-se um programador completo, 
                     seja em front-end ou em back-end.
                    </p>
                    <p>
                     Nos próximo exemplos usaremos uma linguagem muito popular o Javascript e antes disso uma breve introdução.
                    </p>
                    
                    <h2 className='section-blog-article-title'>O que é Javascript ? </h2>  
                    <p>
                     <b className='color-bold'>JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores 
                     e manipular comportamentos de páginas web.</b>
                    </p>
                    <p>
                     Segundo a Mozilla Foundation, atual nome da antiga Netscape Communications Corporations, empresa responsável 
                     pela criação do JS, "JavaScript é uma linguagem de programação, leve, interpretada, orientada a objetos, baseada
                     em protótipos e em first-class functions (funções de primeira classe), mais conhecida como a linguagem de script 
                     da Internet."
                    </p>
                    <p>
                     Com seus scripts é possível incluir, em uma página estática, elementos dinâmicos como mapas, formulários, operações numéricas, 
                     animações, infográficos interativos e muito mais.
                    </p>
                    <p>
                     O JavaScript é uma das mais importantes tecnologias voltadas para o front-end e, unindo-se ao trio HTML, CSS e PHP, formam um grupo 
                     de linguagens que abrangem praticamente todas as exigências do desenvolvimento de uma página completa, dinâmica e com boa performance.
                    </p>
                    <p>
                     Do final dos anos 90 até meados dos anos 2000, o JS ganhou grande popularidade ao ser utilizado por grandes empresas para a construção de 
                     seus sites, como o Facebook, por exemplo.
                    </p>
                    <p>
                     Alguns exemplos de sites que utilizam JS em seu front e back-end hoje em dia são Ebay, LinkedIn e Yahoo.
                    </p>
                    <p>
                     Mas o JS não se restringe mais apenas às páginas e aos navegadores, como foi durante vários anos: com o advento de diversos frameworks, APIs, 
                     melhorias e criação de centenas de funções, hoje já é possível utilizar JavaScript em aplicativos mobile, softwares para desktop e até mesmo em back-end.
                    </p>
                    
                    <h2 className='section-blog-article-title'>Meu primeiro programa</h2>
                    <p>
                     Para esse exercício simples vamos usar o navegador Chrome, que é um dos
                     mais populares navegadores do mundo.Acredito que você ja dever ter este
                     programa instalado em seu computador.
                    </p>  
                    <p>
                     Abra o bloco de notas, deixe o documento em branco clique em "salvar como" e renomeie 
                     seu documento como index.html e feche o arquivo.
                    </p>   
                    <br />
                    <Image className='section-blog-article-img-text' src={ imgarticle7 }></Image>
                    <br />
                    <p>
                     Você vera que agora este arquivo agora tem um icone do navegador,este tipo de arquivo 
                     nós chamamos como Html <b className='color-bold'>(HiperText Markup Language)</b>, é um tipo de arquivo especifico para
                     ser executado no browser.
                    </p>
                    <br />
                    <Image className='section-blog-article-img-text' src={ imgarticle8 }></Image>
                    <br />
                    <p>
                     De duplo clique nesse arquivo que sera automaticamente aberto em seu browser.
                     Agora aperte F12 em seu teclado e clique no campo console no canto inferior da
                     tela.E esse campo que usaremos para nosso exemplo  
                    </p>
                    <br />
                    <Image className='section-blog-article-img-text' src={ imgarticle9 }></Image>
                    <br /> 
                    <p>
                     Então vamos para nosso primeiro exemplo.
                    </p>
                    <p>
                     Digite o código abaixo e clique no enter.
                    </p>
                    <pre>
                        <code>
                          ('Hello Word!')
                        </code>
                    </pre>
                    <p>
                     Essa é a forma mais simples de escrever na tela.
                    </p>
                    <p>
                     Agora no próximo exemplo nós temos uma variável<b className='color-bold'>(variável é um espaço na 
                     memória do computador destinado a um dado que é alterado durante a 
                     execução do algoritmo.)</b> e essa variável vou chamar de a que vai receber um tipo 
                     valor numérico 1 e embaixo vou chamar a variável de b que vai receber 
                     um tipo numérico 2. 
                    </p>
                    <p>
                     Vou ter um variável chamada de result que vai receber os valores das variáveis 
                     a e b em uma soma. 
                    </p>
                    <pre>
                        <code>
                          let a = 1;
                          <br />
                          let b = 2;
                          <br />
                          let result = a + b;
                        </code>
                    </pre>
                    <p>
                     E por fim vou imprimir o resultado soma das variáveis.          
                    </p>
                    <pre>
                        <code>
                          ( result )
                          <br />
                          3
                        </code>
                    </pre>
                   <p>
                     Você acabou de executar seu primeiro programa.        
                   </p>
                   <h2 className='section-blog-article-title'>Considerações Finais</h2>
                   <p> 
                    Obviamente você não se tornou um mago dos programas e esse não é
                    o objetivo deste artigo, mas ja está dando os primeiros passos na 
                    programação vou deixar abaixo alguns links para você que deseja 
                    se aprofundar mais nesse assunto.
                   </p>     
                   <h2 className='section-blog-article-title'>Links de Referência</h2>
                   <p>
                    W3SCHOOLS: JAVASCRIPT - 
                    <a href='https://www.w3schools.com/js/default.asp'>https://www.w3schools.com/js/default.asp</a>
                    <br />
                    MDN MOZILLA.ORG - 
                    <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'>https://developer.mozilla.org/pt-BR/docs/Web/JavaScript</a>
                    <br />
                    PLAYLIST LÒGICA DE PROGRAMAÇÂO: Gustavo Guanabara - 
                    <a href='https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV'>https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV</a>
                   </p> 
                   <a href='blog'>
                    <Button className='section-blog-article-button section-subscribe-button'>Voltar</Button>
                   </a>       
                </div>
            </Container>
        </div>
    )
}

export default SectionBlogArticle2;
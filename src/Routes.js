import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from "./page/home/Home";
import SectionAbout from './components/section-about/SectionAbout';
import SectionProjects from './components/section-projects/SectionProjetcs';
import SectionForm from './components/section-form/SectionForm';
import Error404 from './features/error404/Error404';
import SectionBlog from './components/section-blog/SectionBlog';
import PartnersWarning from './features/warnings/PartnersWarning';
import SectionSales from './components/section-sales/SectionSales';
import SalesWarning from './features/warnings/SalesWarning';
import SectionBlogArticle1 from './components/section-blog/SectionBlogArticle1';
import SectionBlogArticle2 from './components/section-blog/SectionBlogArticle2';

function MainRoutes(){
    return(
        <Routes>
            <Route 
                path='/'
                element={ <Home />} 
            />
            <Route 
                path='/sobre'
                element={ <SectionAbout />} 
            />
            <Route 
                path='/projetos'
                element={ <SectionProjects/>} 
            />
            <Route
                path='/blog'
                element={ <SectionBlog /> }
            />
            <Route
                path='/artigologicaum'
                element={ <SectionBlogArticle1 /> }
            />
            <Route
                path='/artigologicadois'
                element={ <SectionBlogArticle2 /> }
            />
            
            <Route
                path='/form'
                element={ <SectionForm /> } 
            />
            <Route
                path='*'
                element={ <Error404 /> } 
            />
            <Route 
                path='/partners'
                element={ <PartnersWarning /> }
            />
            <Route 
                path='/saibamais'
                element={ <SectionSales /> }
            />
            <Route 
                path='/mensagemvendas'
                element={ <SalesWarning /> }
            />
        </Routes>
    )
}

export default MainRoutes;
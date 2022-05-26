import React from 'react';
import UserLayout from '../layouts/UserLayout';
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Faqs from '../pages/Faqs';
import OverviewPage from '../pages/OverviewPage';
import OverviewFirstPage from '../components/Overview/OverviewFirstPage';
import OverviewLastPage from '../components/Overview/OverviewLastPage';
import Thanks from '../pages/Thanks';


function Router() {
   return (
      <Routes>
        <Route path='/' element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/overview" element={<OverviewPage />} >
               <Route path='' element={<OverviewFirstPage />} />
               <Route path='start' element={<OverviewLastPage />} />
            </Route>
            <Route path='thanks' element={<Thanks />} />
        </Route>
      </Routes>
   );
}

export default Router;

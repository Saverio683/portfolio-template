import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Loading } from 'react-loading-dot';

import Header from '../components/header/header.component';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top.component';

import { AppContainer } from './app.styles';

const HomePage = lazy(() => import('../pages/home/home-page.component'));
const AboutPage = lazy(() => import('../pages/about/about-page.component'));
const ProjectsPage = lazy(() => import('../pages/projects/projects-page.component'));
const ContactPage = lazy(() => import('../pages/contact/contact-page.component'));

const App = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <AppContainer>
      <Header currentPath={pathname}/>
        <Suspense fallback={
          <Loading background='#029602' size='2.5rem' margin='1.5rem' />}>
          <ScrollToTop>
            <Routes location={location} key={pathname}>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/about' element={<AboutPage />} />
              <Route exact path='/projects' element={<ProjectsPage />} />
              <Route exact path='/contact' element={<ContactPage />} />
            </Routes>
          </ScrollToTop>
        </Suspense>
    </AppContainer>
  );
}

export default App;
import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { PageLoader } from './components/ui/PageLoader';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { PageTransition } from './components/layout/PageTransition';
import {
  AboutPage,
  CertificationsPage,
  ContactPage,
  EducationPage,
  ExperiencePage,
  HomePage,
  NotFoundPage,
  ProjectsPage,
  PublicationsPage,
  SkillsPage,
  VolunteeringPage,
} from './pages';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <MainLayout>
          <PageTransition routeKey={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/volunteering" element={<VolunteeringPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageTransition>
        </MainLayout>
      </Suspense>
    </>
  );
}

export default App;

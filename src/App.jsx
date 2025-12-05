// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './Page/Homepage'; // Use relative path correctly
import Aboutpage from './Page/Aboutpage'; // Use relative path correctly
import Eventspage from './Page/Eventspage';
import EducationPage from "./Page/EducationPage"
import OrganisationPage from "./Page/OrganisationPage"
import BookNowPage from "./Page/BookNowPage"
import Footer from "./Page/Footer"
import Availablecourses from "./Page/Availablecourses"
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services/events" element={<Eventspage />} />
        <Route path="/services/education" element={<EducationPage />} />
        <Route path="/services/organisation" element={<OrganisationPage />} />
        <Route path="/availablecourses" element={<Availablecourses />} />
        <Route path="/contact" element={<BookNowPage />} />
         <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
        <GDPRConsent />
    </Router>
  );
}


export default App;



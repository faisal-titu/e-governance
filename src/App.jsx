import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Policies from './pages/Policies';
import Contact from './pages/Contact';
import ServiceDetails from './pages/ServiceDetails';
import PolicyDetails from './pages/PolicyDetails';
import NationalPortal from './pages/services/NationalPortal';
import MyGov from './pages/services/MyGov';
import LandRegistry from './pages/services/LandRegistry';
import ENothi from './pages/services/ENothi';
import Electricity from './pages/services/Electricity';
import DigitalGovernance from './pages/policies/DigitalGovernance';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsConditions from './pages/policies/TermsConditions';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/policy/:id" element={<PolicyDetails />} />
            <Route path="/services/national-portal" element={<NationalPortal />} />
           <Route path="/services/mygov" element={<MyGov />} />
          <Route path="/services/land" element={<LandRegistry />} />
          <Route path="/services/enothi" element={<ENothi />} />
          <Route path="/services/electricity" element={<Electricity />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
           <Route path="/policies/digital" element={<DigitalGovernance />} />
          <Route path="/policies/privacy" element={<PrivacyPolicy />} />
          <Route path="/policies/terms" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
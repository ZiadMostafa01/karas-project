import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatBot from "./components/ChatBot";
import ScrollToTop from "./components/layout/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import DoctorDetails from "./layouts/DoctorDetails";
import Home from "./pages/Home";
import OurServices from "./pages/services/OurServices";
import PCRTesting from "./pages/services/PCRTesting";
import OurTeam from "./pages/OurTeam";
import Clinics from "./pages/clinics/Clinics";
import KarasJLT from "./pages/clinics/KarasJLT";
import KarasDowntown from "./pages/clinics/KarasDowntown";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true, 
      offset: 80,
    });
  }, []);
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="all-services" element={<OurServices />} />

          <Route path="clinics" element={<Clinics />} />
          <Route path="clinics/karas-JLT" element={<KarasJLT />} />
          <Route path="clinics/karas-downtown" element={<KarasDowntown />} />

          <Route path="doctor/:id" element={<DoctorDetails />} />
          <Route path="pcr-testing" element={<PCRTesting />} />
        </Route>
      </Routes>
      <ChatBot />
    </>
  );
}

export default App;

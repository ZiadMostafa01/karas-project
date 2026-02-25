import Landing from "../components/Home/Landing";
import PetCareSection from "../components/Home/PetCareSection";
import FeatureBar from "../components/Home/FeatureBar";
import ChooseClinic from "../components/Home/ChooseClinic";
import ServicesCards from "../components/Home/ServicesCards";
import AppointmentSection from "../components/Home/AppointmentSection";
import PhilosophySection from "../components/Home/PhilosophySection";

function Home() {
  return (
    <>
      <Landing />
      <FeatureBar />
      <ServicesCards />
      <PetCareSection />
      <ChooseClinic />
      <PhilosophySection />
      <AppointmentSection />
    </>
  );
}
export default Home;

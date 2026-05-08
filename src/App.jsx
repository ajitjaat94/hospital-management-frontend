import "./App.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactInfoSection from "./components/ContactInfoCard";
import HospitalInfoSection from "./components/HospitalInfoSection";
import HospitalServicesSection from "./components/HospitalServicesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopBar />,
      <Navbar />,
      <HeroSection />,
      <ContactInfoSection />,
      <HospitalServicesSection />,
      <HospitalInfoSection />,
      <Footer />
    </>
  );
}

export default App;

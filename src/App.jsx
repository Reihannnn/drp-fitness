import "./App.css";
import NavigationBar from "./pages/navbar"; // section navigation
import CoachSection from "./pages/coach";
import Facility from "./pages/facility";
import HeroPage from "./pages/Hero";
import MemberPhoto from "./pages/OurMember";
import LocationSection from "./pages/location";
import PriceNew from "./components/price/PriceNew";
import { PersonalTrainerPrice } from "./components/price/personalTrainerPrice";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./components/footer/footer";
function App() {
  return (
    <section>
      <SpeedInsights/>
      <NavigationBar />
      <HeroPage />

      <CoachSection />
      <PriceNew/>
      <PersonalTrainerPrice/>

      <MemberPhoto />

      <Facility />
      <LocationSection />
      <Footer />
      
    </section>
  );
}

export default App;

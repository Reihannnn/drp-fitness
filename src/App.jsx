import "./App.css";
import NavigationBar from "./pages/navbar"; // section navigation
import CoachSection from "./pages/coach";
import Facility from "./pages/facility";
import HeroPage from "./pages/Hero";
import MemberPhoto from "./pages/OurMember";
import LocationSection from "./pages/location";
import PriceNew from "./components/price/PriceNew";
import { PersonalTrainerPrice } from "./components/price/personalTrainerPrice";
function App() {
  return (
    <section>
      <NavigationBar />

      <HeroPage />

      <CoachSection />
      <PriceNew/>
      <PersonalTrainerPrice/>

      <MemberPhoto />

      <Facility />
      <LocationSection />
    </section>
  );
}

export default App;

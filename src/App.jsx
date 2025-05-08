import "./App.css";
import NavigationBar from "./pages/navbar"; // section navigation
import CoachSection from "./pages/coach";
import Facility from "./pages/facility";
import HeroPage from "./pages/Hero";
import GymPricing from "./pages/price";
import MemberPhoto from "./pages/OurMember";
import LocationSection from "./pages/location";
function App() {
  return (
    <section>
      <NavigationBar />

      <HeroPage />

      <CoachSection />
      <GymPricing />
      <MemberPhoto />

      <Facility />
      <LocationSection />
    </section>
  );
}

export default App;

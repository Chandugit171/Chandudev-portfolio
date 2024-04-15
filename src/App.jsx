import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";

export function App() {
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;

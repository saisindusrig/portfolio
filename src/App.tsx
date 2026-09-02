import Home from "./pages/Home";
import "./App.css";
import DotGrid from "./components/DotGrid";

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      
      {/* Dot background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2F293A"
          activeColor="#ffffff"
          proximity={50}
          shockRadius={250}
          shockStrength={1}
          resistance={100}
          returnDuration={0.1}
        />
      </div>

      {/* Website content */}
      <div className="relative z-10">
        <Home />
      </div>

    </div>
  );
}
export default App;
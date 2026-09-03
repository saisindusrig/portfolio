import Home from "./pages/Home";
import "./App.css";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="relative z-10">
        <Home />
      </div>
       <Footer/>
    </div>
  );
}
export default App;
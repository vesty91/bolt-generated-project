import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Configurator from "./pages/Configurator";
import { Navbar } from "@/components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/configurator" element={<Configurator />} />
      </Routes>
    </Router>
  );
}

export default App;

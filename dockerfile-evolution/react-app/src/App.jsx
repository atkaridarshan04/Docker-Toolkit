import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DockerBasics from "./pages/DockerBasics";
import BestPractices from "./pages/BestPractices";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docker-basics" element={<DockerBasics />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

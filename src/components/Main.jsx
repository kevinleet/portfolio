import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import OrangeBoxAlerts from "./OrangeBoxAlerts";
import MBTATracker from "./MBTATracker";
import HelloWorld from "./HelloWorld";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route
        exact
        path="/projects/orangeboxalerts"
        element={<OrangeBoxAlerts />}
      />
      <Route exact path="/projects/mbtatracker" element={<MBTATracker />} />
      <Route exact path="/projects/helloworld" element={<HelloWorld />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Main;

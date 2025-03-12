import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home";
import "./index.css";
import NewProfile from "./pages/NewProfile"; 


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/home/:profileId" element={<Home />} />
        <Route path="/new-profile" element={<NewProfile />} /> 
      </Routes>
    </Router>
  );
}

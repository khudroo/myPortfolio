import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeWrapper from "./components/HomeWrapper/HomeWrapper";
import Haba from "./components/Project/Haba";
import Education from "./components/Project/Education";
import Travel from "./components/Project/Travel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/haba" element={<Haba />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;

import "./App.css";
import Landing from "./Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postview from "./Postview/Postview";
import Newpost from "./Newpost/Newpost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/post" element={<Postview />} />
          <Route path="/newPost" element={<Newpost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

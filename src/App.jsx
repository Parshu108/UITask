import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Treatment from "./Pages/Treatment";
import Whyus from "./Pages/Whyus";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Services />} />
            <Route path="treatment" element={<Treatment/>} />
            <Route path="whyus" element={<Whyus/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

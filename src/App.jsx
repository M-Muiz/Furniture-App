import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";


const App = () => {
  return (
    <div className=" max mx-auto">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
      )
}

export default App
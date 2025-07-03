import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Product from "./components/Product";

function App() {
  return (
    <>
      <div>
        {/* <h1>location rewview app</h1> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/product" element={<Product />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

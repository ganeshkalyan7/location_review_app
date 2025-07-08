import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PriceingPage from "./pages/PriceingPage";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Applayout from "./pages/Applayout";

function App() {
  return (
    <>
      <div>
        {/* <h1>location rewview app</h1> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/price" element={<PriceingPage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/Login" element={<Login />} />
            {/* nested Routes */}
            <Route path="/Applayout" element={<Applayout />}>
              <Route index element={<p>cities</p>} />
              <Route path="cities" element={<p>List of cities</p>} />
              <Route path="countries" element={<p>list of contries</p>} />
              <Route path="form" element={<p>Form</p>} />
            </Route>
            {/* nested Routes */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PriceingPage from "./pages/PriceingPage";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Applayout from "./pages/Applayout";
import CitiesList from "./components/CitiesList";
import Countries from "./components/Countries";
import { useEffect, useState } from "react";
import CitiDetails from "./components/CitiDetails";
import Form from "./components/Form";

function App() {
  const url = "http://localhost:9000/cities";
  const [citiesdata, setCitiesdata] = useState([]);
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      try {
        setisloading(true);
        const resposne = await fetch(url);
        const data = await resposne.json();
        if (!data.ok) {
          console.log("error");
        }

        //  if (!res.ok) {
        //   throw new Error("Network response was not ok");
        // }
        setCitiesdata(data);
        setisloading(false);
      } catch (err) {
        console.log(err);
      }
    };
    FetchData();
  }, []);

  const deleteItem = (id) => {
    setCitiesdata(citiesdata.filter((city) => city.id !== id));
  };

  console.log(citiesdata);

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
              <Route
                index
                element={
                  <CitiesList
                    citiesdata={citiesdata}
                    isloading={isloading}
                    deleteItem={deleteItem}
                  />
                }
              />
              <Route
                path="cities"
                element={
                  <CitiesList
                    citiesdata={citiesdata}
                    isloading={isloading}
                    deleteItem={deleteItem}
                  />
                }
              />
              <Route path="cities/:id" element={<CitiDetails />} />
              <Route
                path="countries"
                element={
                  <Countries citiesdata={citiesdata} isloading={isloading} />
                }
              />
              <Route path="form" element={<Form />} />
            </Route>
            {/* nested Routes */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

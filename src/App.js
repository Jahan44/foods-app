import React from "react";
import Home from "./Components/HomePage/Home";
import Navbars from "./Components/NavbarPage/Navbars";
import Footer from "./Components/FooterPage/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Components/CatagorisPage/Categories";
import Random from "./Components/RandomPage/Random";
import MealDetails from "./Components/MealDetailsPage/MealDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars></Navbars>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/categories" element={<Categories></Categories>}></Route>
          <Route path="/random" element={<Random></Random>}></Route>
          <Route
            path="/home/:mealsId"
            element={<MealDetails></MealDetails>}
          ></Route>
          <Route
            path="/home/home/:mealsId"
            element={<MealDetails></MealDetails>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header";
import TitleSection from "./components/TitleSection";
import MainSection from "./components/MainSection";
import BrandSection from "./components/BrandSection"
import CardSection from "./components/CardSection"
import OfficeSection from "./components/OfficeSection";
import Footer from "./components/Footer";


// Header Component props
const aboutUs = {
  id: 1,
  title: "About us",
  selected: false
};
const career = {
  id: 2,
  title: "Career",
  selected: true
};
const departements = {
  id: 3,
  title: "Departements",
  selected: false,
  dropDownArr: [
    { id: 1, title: "Marketings & PR" },
    { id: 2, title: "Customer Success & Sales" },
    { id: 3, title: "IT,Product, Deseign & UX " },
    { id: 4, title: "Finance & administration" },
    { id: 4, title: "HR & more" }
  ]
};
const navMenu = [aboutUs, career, departements];
// brand section props
const listBrands= [

]


const App = () => {
  return (
    <div className="App">
      <Header linkListe={navMenu} />
      <TitleSection />
      <MainSection />
      <BrandSection/>
      <CardSection/>
      <OfficeSection/>
      <Footer/>
    </div>
  );
};

export default App;

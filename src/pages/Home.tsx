import Calculator from "../components/Calculator/Calculator";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [dark, setDark] = useState<boolean>(false);
  return (
    // Wenn Zustand dark, gib Classname dark
    <div className={`${dark && "dark"}`}>
      {/* Ich empfange true false Wert, Zustand = true/false, wenn dark aktiv, änder den setter auf den neuen Zustand */}
      <Header dark={dark} setDark={setDark} />
      <Hero />
      <Blogs />
      <Calculator />
      <Footer />
    </div>
  );
};

export default Home;

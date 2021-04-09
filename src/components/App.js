import React, { useState } from "react";
import "./style/App.scss";

// import games from "../api/games";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Categories from "./Categories";
import Platform from "./Platform";
import Result from "./Result";

const App = () => {
  const [categories, setCategories] = useState();
  const [platform, setPlatform] = useState();

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main className="app__main">
        <About />
        <Categories setCategories={setCategories} />
        <Platform setPlatform={setPlatform} />
        <Result categories={categories} platform={platform} />
      </main>
    </div>
  );
};

export default App;

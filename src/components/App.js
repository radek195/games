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
  const [rand, setRand] = useState(false);
  return (
    <div className="app">
      <Navbar setRand={setRand} />
      <Hero />
      <main className="app__main">
        <About />
        <Categories setCategories={setCategories} setRand={setRand} />
        <Platform setPlatform={setPlatform} setRand={setRand} />
        <Result
          categories={categories}
          platform={platform}
          setRand={setRand}
          random={rand}
        />
      </main>
    </div>
  );
};

export default App;

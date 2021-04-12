import React, { useState, useEffect } from "react";
import games from "../api/games";
import Button from "./Button";
import "./style/Result.scss";

const Result = ({ categories, platform, random, setRand }) => {
  const [results, setResults] = useState([]);

  const filterResults = (results) => {
    return results.filter((result) => {
      return categories.every((item) =>
        result.genre.toLowerCase().includes(item)
      );
    });
  };
  useEffect(() => {
    if (random) {
      getResults();
    }
    return () => {
      setRand(false);
    };
  }, [random]);
  const getResults = async () => {
    const { data } = await games.get("/games", {
      params: {
        platform: platform,
        tag: { ...categories },
      },
    });

    if (random) {
      let rand = Math.floor(Math.random() * data.length);

      setResults([data[rand]]);
    } else {
      setResults(filterResults(data));
    }
  };
  const renderedResults = results.map(
    ({
      id,
      thumbnail,
      short_description,
      title,
      developer,
      genre,
      game_url,
    }) => {
      return (
        <a className="result__card" key={id} href={game_url}>
          <img
            src={thumbnail}
            alt={short_description}
            className="result__img"
          />
          <div className="result__content">
            <h4 className="result__name">{title}</h4>
            <p className="result__developer">{developer}</p>
            <p className="result__description">{short_description}</p>
            <p className="result__category">Category: {genre}</p>
          </div>
        </a>
      );
    }
  );
  return (
    <section className="result" id="result">
      <div className="result__wrapper">
        <h3 className="result__title">
          <i className="far fa-window-restore"></i> .results
        </h3>
        <div className="result__panel">
          <Button text={"Show results"} handleClick={getResults} />
        </div>

        <div className="result__box">{renderedResults}</div>
      </div>
    </section>
  );
};

export default Result;

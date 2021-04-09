import React, { useState, useEffect } from "react";
import "./style/Categories.scss";

const categories = [
  "mmorpg",
  "shooter",
  "mmo",
  "social",
  "strategy",
  "moba",
  "racing",
  "sports",
  "card game",
  "battle royale",
  "fantasy",
  "fighting",
  "action rpg",
];

const Categories = ({ setCategories }) => {
  const [selected, setSelected] = useState([]);

  const clickHandle = (category) => {
    let arr = [...selected];

    if (selected.includes(category)) {
      setSelected(arr.filter((e) => e !== category));
    } else {
      setSelected([...arr, category]);
    }
  };

  useEffect(() => {
    setCategories(selected);
  }, [selected]);

  const renderedCategories = categories.map((category, index) => {
    return (
      <div
        className={
          selected.includes(category)
            ? "categories__item categories__item--active"
            : "categories__item"
        }
        key={index}
        onClick={() => {
          clickHandle(category);
        }}
      >
        {category}
      </div>
    );
  });

  return (
    <section id="start" className="categories">
      <div className="categories__wrapper">
        <h3 className="categories__title">
          <i className="fas fa-poll-h"></i> .categories
        </h3>
        <div className="categories__box">{renderedCategories}</div>
      </div>
    </section>
  );
};

export default Categories;

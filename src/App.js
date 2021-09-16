import { useState } from "react";
import "./styles.css";

export default function App() {
  var categories = [
    "Veg",
    "Non Veg",
    "Chinese",
    "North Indian",
    "South Indian"
  ];

  var restObject = {
    Veg: ["Madhurima", "Neelkanth", "Moti Mahal", "Sepia", "Rocca"],
    "Non Veg": ["Tunday Kababi", "KFC", "AL Baik", "Dastarkhwan", "Acacia"],
    Chinese: ["Chung FA", "Luk Jin", "Mainland China"],
    "North Indian": ["Royal Sky", "Royal cafe", "The MEP", "BBQ Nation"],
    "South Indian": ["Vaango", "Sagar Ratna", "Lazeezo Dosa"]
  };

  var rating = {
    Madhurima: "4/5",
    Neelkanth: "4.5/5",
    "Moti Mahal": "4.7/5",
    Sepia: "3.5/5",
    Rocca: "4/5",
    "Tunday Kababi": "4.8/5",
    KFC: "3/5",
    "AL Baik": "3.7/5",
    Dastarkhwan: "4.3/5",
    Acacia: "4/5",
    "Chung FA": "4.2/5",
    "Luk Jin": "4.4/5",
    "Mainland China": "4.8/5",
    "Royal Sky": "4.7/5",
    "Royal cafe": "4.6/5",
    "The MEP": "4.8/5",
    "BBQ Nation": "3.9/5",
    Vaango: "4/5",
    "Sagar Ratna": "4.2/5",
    "Lazeezo Dosa": "4.5/5"
  };
  //const restaurant = Object.keys(restObject);
  function clickHandler(categories) {
    setRest(restObject[categories]);
  }

  var [rest, setRest] = useState(restObject.Veg);

  return (
    <div className="App">
      <h2>{"Restaurant Recommendation App"}</h2>
      <p>Select a category to get started.</p>
      <div className="Category">
        {categories.map(function (item) {
          return (
            <button key={item} onClick={() => clickHandler(item)}>
              {item}
            </button>
          );
        })}
      </div>
      {rest.map(function (item) {
        return (
          <div key={item} className="Restaurant">
            <h3>{item}</h3>
            <small>{rating[item]}</small>
          </div>
        );
      })}
    </div>
  );
}

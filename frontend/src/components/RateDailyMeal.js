import React from "react";
import { Card, Col, Row } from "antd";
import { Rate } from "antd";
import RateMealCard from "./RateMealCard";
let dateObj = new Date();

let month = String(dateObj.getMonth() + 1).padStart(2, "0");

let day = String(dateObj.getDate()).padStart(2, "0");

let year = dateObj.getFullYear();
let date = day + "/" + month + "/" + year;
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(date);

function RateDailyMeal() {
  return (
    <>
      <div>
        Day: {weekday[new Date().getDay()]}
        <br />
        Date: {date}
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <RateMealCard title="Breakfast" content="Milk, Banana" />
        <RateMealCard title="Lunch" content="Rice, Daal and Sabji" />
        <RateMealCard title="Supper" content="Chai and Samosa" />
        <RateMealCard title="Dinner" content="Roti, Sabji and Gulaabjamun" />
      </div>
    </>
  );
}
export default RateDailyMeal;

import { Card, Rate } from "antd";
import React, { useState } from "react";

function RateMealCard(props) {
  const [rating, setRating] = useState(0);
  function handleRating(value) {
    setRating(value);
    let title = props.title;
    console.log(title, value);
  }
  return (
    <div
      style={{
        background: "#ECECEC",
        padding: "20px",
        margin: "20px 40px 40px 10px",
      }}
    >
      <Card
        title={props.title}
        bodyStyle={{ padding: "0" }}
        bordered={true}
        style={{ width: 330 }}
      >
        <p>{props.content}</p>
        <Rate defaultValue={rating} onChange={handleRating} />
      </Card>
    </div>
  );
}

export default RateMealCard;

import React from "react";
import { Carousel } from "antd";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

const contentStyle = {
  height: '325px',
  width: "75%",
  color: "#fff",
  margin: "auto",
  lineHeight: "160px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  textAlign: "center",
  background: "#364d79",
};

const imageArray = [
  {
    url: image1,
    description: "Image 1",
  },
  {
    url: image2,
    description: "Image 1",
  },
  {
    url: image3,
    description: "Image 3",
  },
  {
    url: image4,
    description: "Image 4",
  },
];

const Slide = () => (
  <Carousel autoplay>
    {imageArray.map((image) => (
      <div>
        <img src={image.url} alt={image.description} style={contentStyle} />
      </div>
    ))}
  </Carousel>
);

export default Slide;

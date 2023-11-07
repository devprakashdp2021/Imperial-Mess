import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  // height: '350px',
  width: '100%',
  height: 'auto',
  color: '#fff',
  lineHeight: '160px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  textAlign: 'center',
  background: '#364d79',
};

const imageArray = [
  { url: 'https://www.india.gov.in/sites/upload_files/npi/files/upaj.jpg', description: "Image 1" },
  { url: 'https://www.india.gov.in/sites/upload_files/npi/files/upaj.jpg', description: "Image 1" },
  { url: 'https://www.india.gov.in/sites/upload_files/npi/files/spotlights/pm_vishwakarma.jpg', description: "Image 3" },
  { url: 'https://www.india.gov.in/sites/upload_files/npi/files/spotlights/pm_vishwakarma.jpg', description: "Image 4" }
];

const Slide = () => (
  <Carousel autoplay>
    {/* <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
    {imageArray.map((image) => (
        <div>
          <img
            src={image.url}
            alt={image.description}
            style={contentStyle}
          />
        </div>
      ))}
  </Carousel>
);

export default Slide;
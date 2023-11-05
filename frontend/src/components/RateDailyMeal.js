import React from "react";
import { Card, Col, Row } from "antd";
import { Rate } from 'antd';
let dateObj = new Date();

let month = String(dateObj.getMonth() + 1)
	.padStart(2, '0');
	
let day = String(dateObj.getDate())
	.padStart(2, '0');

let year = dateObj.getFullYear();
let date = day + '/' + month + '/' + year;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(date);

function RateDailyMeal() {
  return (
    <>
      <div>
        Day: {weekday[new Date().getDay()]}
        <br />
        Date: {date}
      </div>
      <div>
      <Row gutter={[32,32]} style={{margin: "60px"}}>
        <Col span={5}>
          <Card title="Breakfast" bordered={false}>
            Breakfast
            <br />
            <Rate />
          </Card>
        </Col>
        <Col span={5}>
          <Card title="Lunch" bordered={false}>
            Lunch
            <br />
            <Rate />
          </Card>
        </Col>
        <Col span={5}>
          <Card title="Supper" bordered={false}>
            Supper
            <br />
            <Rate />
          </Card>
        </Col>
        <Col span={5}>
          <Card title="Dinner" bordered={false}>
            Dinner
            <br />
            <Rate />
          </Card>
        </Col>
      </Row>
      </div>
      
    </>
  );
}
export default RateDailyMeal;

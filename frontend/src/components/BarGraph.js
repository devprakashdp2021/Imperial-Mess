import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { GetMessItem } from '../apicalls/messItems';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function BarGraph(props) {
    const receivedData = Array.from(props.values);
    const startDate = props.startDate;
    const endDate = props.endDate;
    const [isLoading,setLoading]=useState(true);
    const dispatch = useDispatch();

    const start = new Date(startDate.split('/').reverse().join('-'));
    const end = new Date(endDate.split('/').reverse().join('-'));
  
    // Filter dates between start and end
    const filteredData = receivedData.filter(dateString => {
      const date = new Date(dateString.date.split('/').reverse().join('-'));
      return date >= start && date <= end;
    });

    const data = filteredData.map((item,index) => {
        return {
            name: item.date,
            uv: item.quantity * item.price,
        };
    });
    console.log("data",data);
   

  const maxChartWidth = 1500; // Set your maximum allowed width
  const calculatedWidth = data.length * 80; // Adjust 80 as needed based on your preference
  const chartWidth = Math.min(calculatedWidth, maxChartWidth);

  return (
    <>
    
     <div >
     <BarChart
      width={chartWidth}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={60} />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
     </div>
    </>
    
  );
}

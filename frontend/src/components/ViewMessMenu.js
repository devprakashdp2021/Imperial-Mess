import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Day',
    dataIndex: 'day',
    key: 'day',
    width: '20%',
  },
  {
    title: 'Breakfast',
    dataIndex: 'breakfast',
    key: 'breakfast',
    width: '20%',
  },
  {
    title: 'Lunch',
    dataIndex: 'lunch',
    key: 'lunch',
    width: '20%',
  },
  {
    title: 'Supper',
    key: 'supper',
    dataIndex: 'supper',
    width: '20%',
  },
  {
    title: 'Dinner',
    key: 'dinner',
    dataIndex: 'dinner',
    width: '20%',
  },
];
const data = [
  {
    key: '1',
    day: 'John Brown',
    breakfast: 32,
    lunch: 'New York No. 1 Lake Park',
    supper: 'samosa',
    dinner: 'paneer',
  },
  {
    key: '1',
    day: 'John Brown',
    breakfast: 32,
    lunch: 'New York No. 1 Lake Park',
    supper: 'samosa',
    dinner: 'paneer',
  },
  {
    key: '1',
    day: 'John Brown',
    breakfast: 32,
    lunch: 'New York No. 1 Lake Park',
    supper: 'samosa',
    dinner: 'paneer',
  },
  {
    key: '1',
    day: 'John Brown',
    breakfast: 32,
    lunch: 'New York No. 1 Lake Park',
    supper: 'samosa',
    dinner: 'paneer',
  },
  {
    key: '1',
    day: 'John Brown',
    breakfast: 32,
    lunch: 'New York No. 1 Lake Park',
    supper: 'samosa',
    dinner: 'paneer',
  },
  {
    key: '1',
    day: 'John Brown',
    breakfast: 32,
    lunch: 'New York No. 1 Lake Park',
    supper: 'samosa',
    dinner: 'paneer',
  },
  {
    key: '1',
    day: 'John Brown',
    breakfast: 32,
    lunch: 'New York No. 1 Lake Park',
    supper: 'samosa',
    dinner: 'paneer',
  },
 
];
const ViewMessMenu = () => <Table columns={columns} dataSource={data}  pagination={false} />;
export default ViewMessMenu;
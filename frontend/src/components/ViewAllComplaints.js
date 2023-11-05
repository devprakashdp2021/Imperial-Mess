import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Complaint Type',
    dataIndex: 'complaintType',
    key: 'complaintType',
    // width: "20%",
  },
  Table.EXPAND_COLUMN,
  {
    title: 'Complaint',
    dataIndex: 'complaint',
    key: 'complaint',
    // width: "20%",
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => (
      <>
       <button onClick={()=> console.log(record)} >
        {"Upvote"}
      </button>
      <br />
      <button  onClick={()=> console.log(record)}>
        {"Downvote"}
      </button>
      </>
     ),
  },
];
const data = [
  {
    key: 1,
    complaintType: 'John Brown',
    complaint: 32,
    action: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 3rfoiljrfoilinrlfjnlrjfnorljfl'
  },
  {
    key: 2,
    complaintType: 'Jim Green',
    complaint: 42,
    action: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 2,
    complaintType: 'Jim Green',
    complaint: 42,
    action: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 2,
    complaintType: 'Jim Green',
    complaint: 42,
    action: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 2,
    complaintType: 'Jim Green',
    complaint: 42,
    action: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 2,
    complaintType: 'Jim Green',
    complaint: 42,
    action: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 2,
    complaintType: 'Jim Green',
    complaint: 42,
    action: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    complaintType: 'Not Expandable',
    complaint: 29,
    action: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
 
];
function ViewAllComplaints () {
  return (
    <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
    }}
    dataSource={data}
    pagination={false}
  />
  );
  
};
export default ViewAllComplaints;
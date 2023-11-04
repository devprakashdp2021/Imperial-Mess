import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Complaint Type',
    dataIndex: 'complaintType',
    key: 'complaintType',
  },
  Table.EXPAND_COLUMN,
  {
    title: 'Complaint',
    dataIndex: 'complaint',
    key: 'complaint',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
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
    key: 3,
    complaintType: 'Not Expandable',
    complaint: 29,
    action: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
 
];
const ViewAllComplaints = () => (
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
  />
);
export default ViewAllComplaints;
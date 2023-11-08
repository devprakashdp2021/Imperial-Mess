import React, { useState } from "react";
import { Button, Flex, Table } from "antd";

function ViewAllComplaints(props) {
  const [upvoteCounter, setUpvoteCounter] = useState(0);
  const [downvoteCounter, setDownvoteCounter] = useState(0);

  function handleUpvote() {
    setUpvoteCounter(upvoteCounter + 1);
  }
  function handleDownvote() {
    setDownvoteCounter(downvoteCounter + 1);
  }

  const data = [
    {
      key: 1,
      complaintType: "John Brown",
      complaint: 32,
      action: "nn",
      upvoteCounter: 0,
      downvoteCounter: 0, 
      description: "My name is John Brown, I am 3rfoiljrfoilinrlfjnlrjfnorljfl",
    },
    {
      key: 2,
      complaintType: "Jim Green",
      complaint: 42,
      action: "London No. 1 Lake Park",
      upvoteCounter: 0,
      downvoteCounter: 0, 
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 2,
      complaintType: "Jim Green",
      complaint: 42,
      action: "London No. 1 Lake Park",
      upvoteCounter: 0,
      downvoteCounter: 0, 
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 2,
      complaintType: "Jim Green",
      complaint: 42,
      action: "London No. 1 Lake Park",
      upvoteCounter: 0,
      downvoteCounter: 0, 
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 2,
      complaintType: "Jim Green",
      complaint: 42,
      action: "London No. 1 Lake Park",
      upvoteCounter: 0,
      downvoteCounter: 0, 
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 2,
      complaintType: "Jim Green",
      complaint: 42,
      action: "London No. 1 Lake Park",
      upvoteCounter: 0,
      downvoteCounter: 0, 
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 2,
      complaintType: "Jim Green",
      complaint: 42,
      action: "London No. 1 Lake Park",
      upvoteCounter: 0,
      downvoteCounter: 0, 
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      complaintType: "Not Expandable",
      complaint: 29,
      action: "Jiangsu No. 1 Lake Park",
      upvoteCounter: 0,
      downvoteCounter: 0, 
      description: "This not expandable",
    },
  ];

  const columns = [
    {
      title: "Complaint Type",
      dataIndex: "complaintType",
      key: "complaintType",
      width: "30%",
    },
    Table.EXPAND_COLUMN,
    {
      title: "Complaint",
      dataIndex: "complaint",
      key: "complaint",
      width: "40%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <>
          {props.buttonFor === "chiefWarden" && (
            <>
              <button onClick={() => console.log(record)}>{"Resolve"}</button>
            </>
          )}

          {props.buttonFor === "student" && (
            <>
            <Flex gap="large" wrap="wrap">
            {record.upvoteCounter} 
              <Button type="dashed" onClick={handleUpvote}>{"Upvote"}</Button>
              {record.downvoteCounter}
              <Button type="dashed" onClick={handleDownvote}>{"Downvote"}</Button>
            </Flex> 
            </>
          )}
        </>
      ),
    },
  ];

 
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
}
export default ViewAllComplaints;

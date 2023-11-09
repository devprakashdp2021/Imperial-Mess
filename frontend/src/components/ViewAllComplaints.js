import React, { useEffect, useState } from "react";
import { Button, Flex, Table, message } from "antd";
import { GetAllComplaint } from "../apicalls/complaints";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";
import { useDispatch, useSelector } from "react-redux";

function ViewAllComplaints(props) {
  const [upvoteCounter, setUpvoteCounter] = useState(0);
  const [downvoteCounter, setDownvoteCounter] = useState(0);

  function handleUpvote() {
    setUpvoteCounter(upvoteCounter + 1);
  }
  function handleDownvote() {
    setDownvoteCounter(downvoteCounter + 1);
  }

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  async function fetchallcomplaint() {
    try {
      dispatch(ShowLoading());
      let response = await GetAllComplaint();
      if (response.success) {
        setData(
          response.data.map((item, index) => ({
            key: index + 1,
            complaintType: item.complaintType,
            complaint: item.complaint,
            description: item.description,
            upvoteCounter: item.upvoteCount,
            downvoteCounter: item.downvoteCount,
          }))
        );
      } else {
        message.error(response.message);
      }
      setLoading(false);
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  }
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
            <Button onClick={() => console.log(record)}>{"Resolve"}</Button>
          )}

          {props.buttonFor === "student" && (
            <>
              <Flex gap="small">
                {record.upvoteCounter}
                <Button type="dashed" onClick={handleUpvote}>
                  {"Upvote"}
                </Button>
                {record.downvoteCounter}
                <Button type="dashed" onClick={handleDownvote}>
                  {"Downvote"}
                </Button>
              </Flex>
            </>
          )}
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchallcomplaint();
  }, []);
  if (isLoading) {
    return <div> Loading....</div>;
  }
  return (
    <>
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
      {/* {console.log(data)} */}
    </>
  );
}
export default ViewAllComplaints;

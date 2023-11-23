import React, { useEffect, useState } from "react";
import { Button, Flex, Table, message } from "antd";
import { GetAllComplaint } from "../apicalls/complaints";
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { handledownVote,handleupVote } from "../apicalls/complaints";
function ViewAllComplaints(props) {
  const [isLoading,setLoading]=useState(true);
  const[data,setData]=useState({});
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.users);
  async function fetchallcomplaint (){
    try {
      // console.log(user);
      dispatch(ShowLoading());
      let  response = await GetAllComplaint();
          dispatch(HideLoading());
          if(response.success){
              setData(response.data.map((item,index)=>({
                  key:index+1,
                  complaintdetail:item,
                  complaintType: item.complaintType,
                  complaint: item.complaint,
                  description:item.description,
                  upvoteCounter: (item.vote).length,
                  downvoteCounter: (item.downvote).length,
              })) 
              )
              // console.log(response.data)
          }else{
            dispatch(HideLoading());
              message.error(response.message);
          }
          setLoading(false);
      } catch (error) {
          dispatch(HideLoading());
          message.error(error.message);
      }
  }
  async function handleUpvote(complaintdetail) {
    try{
      let response=await handleupVote({complaint:complaintdetail,user:user});
      if(response.success){
        await fetchallcomplaint()
        message.info('Your vote has been recorded');
      }else{
        message.error('An error occurred while voting')
      }
    }catch(error){
      message.error(error.message);
    }
  }
 async function handleDownvote(complaintdetail) {
    try{
      let response=await handledownVote({complaint:complaintdetail,user:user});
      if(response.success){
        await fetchallcomplaint()
        message.info('Your unvote has been recorded');
      }else{
        message.error('An error occurred while voting')
      }
    }catch(error){
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
            <Flex gap="small" >
            {(record.upvoteCounter)}
              <Button type="dashed" onClick={()=>handleUpvote(record.complaintdetail)}>{"Upvote"}</Button>
              {(record.downvoteCounter)}
              <Button type="dashed" onClick={()=>handleDownvote(record.complaintdetail)}>{"Downvote"}</Button>
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

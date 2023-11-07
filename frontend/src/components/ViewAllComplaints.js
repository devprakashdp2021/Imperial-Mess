import React,{useEffect,useState} from "react";
import { Table ,message} from "antd";
import { GetAllComplaint } from "../apicalls/complaints";
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch, useSelector } from 'react-redux';
function ViewAllComplaints(props) {
  const [isLoading,setLoading]=useState(true);
  const[data,setData]=useState({});
  const dispatch = useDispatch();
  async function fetchallcomplaint (){
    try {
      dispatch(ShowLoading());
      let  response = await GetAllComplaint();
          if(response.success){
              setData(response.data.map((item,index)=>({
                  key:index+1,
                  complaintType: item.complaintType,
                  complaint: item.complaint,
                  description:item.description,
                
              })) 
              )
          }else{
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
      // width: "20%",
    },
    Table.EXPAND_COLUMN,
    {
      title: "Complaint",
      dataIndex: "complaint",
      key: "complaint",
      // width: "20%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <>
          {props.buttonFor === "chiefWarden" && (
            <button onClick={() => console.log(record)}>{"Resolve"}</button>
          )}

          {props.buttonFor === "student" && (
            <>
              <button onClick={() => console.log(record)}>{"Upvote"}</button>
              <br />
              <button onClick={() => console.log(record)}>{"Downvote"}</button>
            </>
          )}
        </>
      ),
    },
  ];
   
  
useEffect(() => {
    fetchallcomplaint();
  }, []);
  if(isLoading){
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

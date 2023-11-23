import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,message} from 'antd';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Blockuser, Getalluser } from '../apicalls/users';

const ViewAllStudents = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [isLoading,setLoading]=useState(true);
  const[data,setData]=useState({});
  const dispatch = useDispatch();
  async function fetchalluser (){
    try {
      // console.log(user);
      dispatch(ShowLoading());
      let  response = await Getalluser();
          if(response.success){
              setData(response.data.map((item,index)=>({
                  key:index+1,
                  name:item.name,
                  gsuiteid:item.gsuiteid,
                  id:item._id,
                  type:item.isActive
              })) 
              )
              // console.log(response.data)
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
   const handleBlock=async(event)=>{
    const id=event.id;
    
    console.log(event);
    try{
       dispatch(ShowLoading);
       let response=await Blockuser(id);
       if(response.success){
        await fetchalluser()
        message.info(`${event.name} has been ${event.type?"Blocked":"Unblocked"}`);
       }else{
        message.error('An error occurred while Blocking')
       }
    }catch(error){
      message.error(error.message);
    }
  }
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "G-Suite ID",
      dataIndex: "gsuiteid",
      key: "gsuiteid",
      width: "40%",
      ...getColumnSearchProps("gsuiteid"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      ...getColumnSearchProps("action"),
      render: (text, record) => (
        <>
          {props.buttonFor === "chiefWarden" && (
            <Button onClick={()=>handleBlock(record)}>{record.type===true?"Block":"Unblock"}</Button>
          )}
        </>
      ),
    },
  ];
  useEffect(() => {
    fetchalluser();
  }, []);
  if(isLoading){
    return <div> Loading....</div>;
  }
  return <Table columns={columns} dataSource={data} pagination={false}/>;
};
export default ViewAllStudents;

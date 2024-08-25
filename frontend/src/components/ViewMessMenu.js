import React, { useState,useEffect } from 'react';
import DayMenu from './DayMenu';
import {FetchMenu} from '../apicalls/MessMenuapi';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Space, Table ,message} from 'antd'; 
const Menu = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.users);
  const [menu, setMenu] = useState();
  const [isLoading,setLoading]=useState(true);
  const handleUpdateMenu = (day, updatedMenu) => {
    setMenu(prevMenu => ({
      ...prevMenu,
      [day]: updatedMenu,
    }));
  };
  const fetchmenu=async()=>{
    try {
     dispatch(ShowLoading());
     setLoading(true);
      const response=await FetchMenu(user._id);
      if(response.success){
        dispatch(HideLoading());
        setMenu(response.data);
       setLoading(false);
      }else{
       message.error(response.message);
      }
    } catch (error) {
     dispatch(HideLoading());
     message.error(error.message);
    }
 }
 useEffect(() => {
  fetchmenu();
}, []);
if(isLoading){
    return <div> Loading....</div>;
  }
  return (
    <div style={{ margin: '20px' }}>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          marginTop: '20px',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <thead>
          <tr style={{ border: '1px solid #ddd', background: '#f2f2f2' }}>
            <th style={styles.tableHeader}>Day</th>
            <th style={styles.tableHeader}>Breakfast</th>
            <th style={styles.tableHeader}>Lunch</th>
            <th style={styles.tableHeader}>Supper</th>
            <th style={styles.tableHeader}>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(menu).map(day => (
            <DayMenu
              key={day}
              day={day}
              menu={menu[day]}
              onUpdate={handleUpdateMenu}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  tableHeader: {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
  },
};

export default Menu;

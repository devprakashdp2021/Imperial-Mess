import React, { useState } from 'react';
import { UpdateMenu } from '../apicalls/MessMenuapi';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Space, Table ,message} from 'antd'; 
const DayMenu = ({ day, menu, onUpdate, shownFor }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const {user} = useSelector((state) => state.users);
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick =async() => {
      try {
        dispatch(ShowLoading());
         const response=await UpdateMenu({day:day,food:menu,hostel:user.hostel});
         if(response.success){
           dispatch(HideLoading());
          // console.log(response.data)
           setEditing(false);
           onUpdate(day, menu);
           console.log(day,menu);

         }else{
          message.error(response.message);
         }
       } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
       }
  };

  const handleInputChange = (meal, e) => {
    onUpdate(day, { ...menu, [meal]: e.target.value });
  };

  return (
    <tr>
      <td style={styles.tableCell}>{day}</td>
      {Object.keys(menu).map(meal => (
        <td key={meal} style={styles.tableCell}>
          {isEditing ? (
            <input
              type="text"
              value={menu[meal]}
              onChange={(e) => handleInputChange(meal, e)}
            />
          ) : (
            menu[meal]
          )}
        </td>
      ))}
      {shownFor === "accountant" && <td style={styles.tableCell}>
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </td>}
      
    </tr>
  );
};

const styles = {
  tableCell: {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
  },
};

export default DayMenu;

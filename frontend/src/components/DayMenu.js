import React, { useState } from 'react';

const DayMenu = ({ day, menu, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    onUpdate(day, menu);
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
      <td style={styles.tableCell}>
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </td>
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

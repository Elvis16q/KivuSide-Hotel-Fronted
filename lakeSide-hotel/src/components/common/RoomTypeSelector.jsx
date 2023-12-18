import React, { useEffect, useState } from 'react';
import { getRoomTypes } from '../utils/ApiFunctions';


const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
  const [roomTypes, setRoomTypes] = useState([""]);
  const [showNewRoomTypeInput, setShowNewRoomTypesInput] = useState(false);
  const [newRoomType, setNewRoomTypes] = useState("");
  useEffect(() => {
    getRoomTypes().then((data) => {
      setRoomTypes(data);
    });
  }, []);
  const handleNewRoomTypeInputChange = (e) => {
    setNewRoomTypes(e.target.value);
  };
  const handleAddNewRoomType = () => {
    if (newRoomType !== "") {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomTypes("");
      setShowNewRoomTypesInput(false);
      handleRoomInputChange({
        target: {
          name: 'roomType',
          value: newRoomType,
        },
      });
    }
  };
  return (
    <div>
      {roomTypes.length > 0 && (
        <div>
          <select
            id='roomtype'
            name='roomtype'
            value={newRoom.roomType}
            onChange={(e) => {
              if (e.target.value === 'Add New') {
                setShowNewRoomTypesInput(true);
              } else {
                handleRoomInputChange(e);
              }
            }}
          >
            <option value={""}>Select a room type</option>
            <option value={"Add New"}>Add New</option>
            {roomTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          {showNewRoomTypeInput && (
            <div className='input-group'>
              <input
                className='form-control'
                type='text'
                pattern='Enter a new room type'
                onChange={handleNewRoomTypeInputChange}
              />
              <button
                className='btn btn-hotel'
                type='button'
                onClick={handleAddNewRoomType}
              >
                Add
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default RoomTypeSelector;
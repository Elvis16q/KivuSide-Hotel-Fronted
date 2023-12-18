import React, { useState } from 'react';

const RoomFilter = ({ data, setFilterData }) => {
  const [filter, setFilter] = useState("");

  const handleSelectChange = (e) => {
    const selectedRoomType = e.target.value;
    setFilter(selectedRoomType);

    if (selectedRoomType === "") {
      // If no filter is selected, show all rooms
      setFilterData(data);
    } else {
      // Filter rooms based on selected room type
      const filteredRooms = data.filter((room) =>
        room.roomType.toLowerCase().includes(selectedRoomType.toLowerCase())
      );
      setFilterData(filteredRooms);
    }
  };

  const clearFilter = () => {
    setFilter("");
    setFilterData(data); // Reset to the original data when clearing the filter
  };

  const roomTypes = ["", ...new Set(data.map((room) => room.roomType))];

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="room-type-filter">
        Filter rooms by type
      </span>
      <select
        className="form-select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value={""}>Select a room type to filter...</option>
        {roomTypes.map((type) => (
          <option key={type} value={String(type)}>
            {String(type)}
          </option>
        ))}
      </select>
      <button
        className="btn btn-hotel"
        type="button"
        onClick={clearFilter}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default RoomFilter;

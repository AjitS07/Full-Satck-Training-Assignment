import React from 'react';

function ColorPicker({ onColorSelect }) {
  const handleChange = (e) => {
    onColorSelect(e.target.value);
  };

  return (
    <div>
      <label>Select a color: </label>
      <input type="color" onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;

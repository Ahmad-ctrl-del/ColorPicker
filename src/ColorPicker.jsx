import { useState } from "react";
import "./index.css";

function ColorPicker() {
  const [colorPicker, setColorPicker] = useState("#5100ff");

  const handleColor = (e) => {
    setColorPicker(e.target.value);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker:</h1>
      <div className="color-display" style={{ backgroundColor: colorPicker }}>
        <p>Selected Color: {colorPicker}</p>
      </div>
      <label>Choose Any Color:</label>
      <input type="color" value={colorPicker} onChange={handleColor} />
    </div>
  );
}

export default ColorPicker;

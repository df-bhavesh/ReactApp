import { useState } from 'react';

const ColorPicker = () => {
    const [color, setColor] = useState("#FF0000");
    const [copyColor, setCopyColor] = useState(false);
    function handleColorChange(e) {
        setColor(e.target.value);
        setCopyColor(false)
    }
    const handleCopyColor = async () => {
        try {
            await navigator.clipboard.writeText(color);
            setCopyColor(true);
            setTimeout(() => { setCopyColor(false); }, 1500);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
return (
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{ backgroundColor: color }}>
                <p> Selected Color : {color}</p>
            </div>
            <label htmlFor="colorPicker">Select Color</label>
            <input type="color" name="" id="colorPicker" value={color} onChange={handleColorChange} />
            <button className='copy-color-button' onClick={handleCopyColor}>
                Copy Color
            </button>
            {copyColor && <p className='copy-clipboard'>✅ Copied to clipboard!</p>}
        </div >
    );
}

export default ColorPicker;

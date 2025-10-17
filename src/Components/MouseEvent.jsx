import React from 'react';

const MouseEvent = () => {
    const handleClick = (e) => {
        console.log("Button Clicked");
    }

    const handleMouseDown = (e) => {
        console.log("Button Moved Down");
    }
    const handleMouseLeave = (e) => {
        console.log("Button Moved Leaved");
    }
    const handleMouseEnter = (e) => {
        console.log("Button Moved Entered");
    }
    const handleMouseUp = (e) => {
        console.log("Button Moved Up");
    }
    const handleMouseOver = (e) => {
        console.log("Button Moved Over");
    }
    return (
        // <>
        <div>
            <button onClick={handleClick}>
                OnClick
            </button>
            <button onMouseDown={handleMouseDown}>
                Button Moved Down
            </button>
            <button onMouseLeave={handleMouseLeave}>
                Button Moved Leave
            </button>
            <button onMouseEnter={handleMouseEnter}>
                Button Moved Entered
            </button>
            <button onMouseUp={handleMouseUp}>
                Button Moved Up
            </button>
            <button onMouseOver={handleMouseOver} onFocus={handleMouseOver}>
                Button Moved Over
            </button>
        </div>
        // </>
    );
}

export default MouseEvent;

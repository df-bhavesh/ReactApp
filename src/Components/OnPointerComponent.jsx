import React from 'react';

const OnPointerComponent = () => {
    const handleSyle = {
        display: 'flex',
        flexDirection: 'column',
    }
    const handlePointerEnter = (e) => {
        e.target.style.backgroundColor = 'lightgreen';
        e.target.style.border = '2px solid black';
        e.target.style.borderRadius = '20px';
    };

    const handlePointerLeave = (e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.border = '';
        e.target.style.borderRadius = '';

    }
    const handlePointerMove = (e) => {
        console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
    };
    const handlePointerUp = (e) => {
        console.log('Pointer released!', e.pointerType);
    };
    return (
        <div className='' style={handleSyle}>
            <h1>OnPointerComponent</h1>
            <div
                className='bac'
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerDown={() => { console.log("Pointer Up Event Triggered") }}
                style={{
                    color: 'black',
                    backgroundColor: '#fff',
                    padding: '10px 15px',
                    margin: '8px 0',
                    borderRadius: '6px',
                }}
            >
                Text 1
            </div>

            <div
                style={{
                    color: 'white',
                    padding: '10px 15px',
                    margin: '8px 0',
                    borderRadius: '6px',
                    backgroundColor: 'lightblue',
                }}
            >
                Text 2
            </div>
        </div>

    );
}

export default OnPointerComponent;

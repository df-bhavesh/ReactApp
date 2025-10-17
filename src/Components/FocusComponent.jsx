import React from 'react';

const FocusComponent = () => {
    return (
        <div>
            <input type="text" placeholder="Focus on me!" 
            // autoFocus
            
            />
            <p>This input should be focused when the component mounts.</p>
        </div>
    );
}

export default FocusComponent;

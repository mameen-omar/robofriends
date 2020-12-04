import React from 'react';

const Scroll = (props) => {
    console.log(window.outerHeight);
    return (
        <div style={{'overflowY': 'scroll', 'height': `800px`}}>
            {props.children}
        </div>
    );
}

export default Scroll;
import React, { Component } from 'react';

const outputscreenrow = (props) => {
    return (
        <div className="screen-row">
            <input type="text" readOnly value={props.value} />
        </div>
    )
}

export default outputscreenrow;
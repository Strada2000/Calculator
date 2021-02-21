import React, { Component } from 'react';

const button = (props) => {
    return (
        <input type='button' value={props.label} onClick = {props.handleClick} />
    );
}
export default button
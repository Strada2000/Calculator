import  React,{Component} from 'react';
import Outputscreenrow from './outputscreenrow.js';

const outputScreen = (props) =>{
    return(
        <div className='screen'>
        <Outputscreenrow value={props.question} />
        <Outputscreenrow value={props.answer} />
        </div>
    )
}
export default outputScreen;

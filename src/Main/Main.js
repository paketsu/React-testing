import React from 'react';
import './Main.css';

const clickHandler = () => {
    console.log('Tätä klikattiin!');
}

const Main = (props) => {
    return (
    <div className="main">
        <p>{props.text}</p>
        <button onClick={clickHandler}>{props.button}</button>
        </div>
    );
}

export default Main;
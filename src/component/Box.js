import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
        <h1>{props.title}</h1>
        <img className="item-img" src="https://msimage.mujikorea.net/goods/31/13/18/47/4547315822225_N_N_400.jpg"/>
        <h2>win</h2>
    </div>
  );
};

export default Box;
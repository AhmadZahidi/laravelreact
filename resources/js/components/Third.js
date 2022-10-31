import React from 'react';
import ReactDOM from 'react-dom';

const Third=()=>{
    return(
    <p>Third</p>    
    );
};

export default Third;

if(document.getElementById('third')){
    ReactDOM.render(<Third/>,document.getElementById('third'));
}
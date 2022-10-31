import React from 'react';
import ReactDOM from 'react-dom';

const Second=()=>{
    return(
    <p>second</p>    
    );
};

export default Second;

if(document.getElementById('second')){
    ReactDOM.render(<Second/>,document.getElementById('second'));
}
import React from 'react';


const Home = () =>{
  return (
    <div>
      <div>Hi There !!!</div>
      <button onClick={ ()=>{ console.log("click")  }  }>Press</button>
    </div>
  );
}

export default {
  component: Home
}

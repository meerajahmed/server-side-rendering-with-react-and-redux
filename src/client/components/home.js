import React from 'react';

const Home = () => {
  return (
    <div>
      <p>Best Home Component</p>
      <button onClick={ e => console.log(e)}>Log</button>
    </div>
  )
};

export default Home;
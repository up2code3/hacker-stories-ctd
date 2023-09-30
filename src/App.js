import * as React from 'react';

function getTitle(title){
  return title;
}


function App() {
  return (
    <div>
      <h1>Hello {getTitle("world")}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      
    </div>
  );
}

export default App;

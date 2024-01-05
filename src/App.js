import React from 'react';
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';


function App() {
  return (
    <Button 
    variant="outlined"
    onClick= {() => console.log('clicked button ')}
    disabled>
      Hello World</Button>
  );
}
export default App;

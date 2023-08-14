import { useState } from 'react';
import Color from './Color.js';
import Colorbox from './Colorbox.js'

function App() {
  const [colorvalue,setColorValue]=useState('')
  return (
    <div className="App">
      <Colorbox
        colorvalue={colorvalue}
      />
      <Color
        colorvalue={colorvalue}
        setColorValue={setColorValue}
      />
    </div>
  );
}

export default App;

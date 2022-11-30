
import { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Singlemap from './Components/Form/Singlemap';



function App() {
  const [location, setPosition] = useState([51.505, -0.09])
 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-5xl font-thin'> Hi</h1>
    
        <Form setPosition={setPosition}></Form>
        <Singlemap location={location}> </Singlemap>
      </header>
    </div>
  );
}

export default App;

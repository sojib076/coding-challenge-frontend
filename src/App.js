
import { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Singlemap from './Components/Form/Singlemap';
import { Toaster } from 'react-hot-toast';



function App() {
  const [location, setPosition] = useState([51.505, -0.09])
 
  return (
    <div className="App">
      <header className="App-header">
        <Form setPosition={setPosition}></Form>
        <Singlemap location={location}> </Singlemap>
      </header>
      <Toaster />
    </div>
  );
}

export default App;

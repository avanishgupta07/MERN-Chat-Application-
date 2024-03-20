
// import { Button } from '@chakra-ui/react';
import './App.css';

import Homepage from './Homepage';
import ChatPage from './ChatPage';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
     <Route path="/"  component={ Homepage} exact/>
     <Route path="/chats"  component={ ChatPage}/>
     {   /* dmkckejvenjfnvdcd*/}

      </div>
  ); 
}

export default App;

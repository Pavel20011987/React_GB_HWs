//import logo from './logo.svg';
//import './App.css';
//import Message from "./Message";

//function App() {
//   const name = 'Pavel';
//   return ( 
//<div>
//        <Message name = { name }/>  
// </div>
//    );
//}

//export default App;
import React from 'react';
import './App.css';
//import { Fruit } from './components/Fruit';
//import { Message } from './components/Message';
import { RenderPage } from './components/RenderPage';

function App() {

    return (

        <div className = "App">
            <header className="App-header" >
                { /* My First React App */}

                { /* <Message name="Pavel" status="done!"></Message> */} { /* <Fruit></Fruit> */}
                <RenderPage />

            </header>
            </div>
    );
}

export default App;
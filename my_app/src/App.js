import logo from './logo.svg';
import './App.css';
import Message from "./Message";

function App() {
    const name = 'Pavel';
    return ( 
<div>
        <Message name = { name }/>  
 </div>
    );
}

export default App;
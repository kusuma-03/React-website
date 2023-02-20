import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" > < h1 > LOGIN FORM < /h1> <
        form action = "" >
        <
        div >
        <
        label htmlFor = "email" > Email < /label> <
        input type = "text"
        name = "email"
        id = "email" / >
        <
        /div>  <
        div >
        <
        label htmlFor = "passw" > Password < /label> <
        input type = "password"
        name = "passw"
        id = "passw" / >
        <
        /div>   <
        button type = "submit" > Login < /button> < /
        form > <
        /
        header > <
        /div>
    );
}

export default App;
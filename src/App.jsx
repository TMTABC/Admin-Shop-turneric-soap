import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Admin from "./Pages/Admin/Admin.jsx";

function App(props) {
    return (
        <div className="app">
        <Navbar></Navbar>
            <Admin/>

        </div>
    );
}

export default App;
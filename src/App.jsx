import './App.scss';
import MyPage from './Pages/MyPage.jsx';
import Description from './Pages/Description.jsx';
import Login from './Pages/Login.jsx';

import { Router } from "@reach/router";


function App() {
    return (
        <Router>
            <MyPage path="/" />
            <Description path="/description" />
            <Login path="/login"/>
        </Router>
    );
}

export default App;

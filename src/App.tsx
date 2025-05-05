import {HashRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login.tsx";
import Klasifikace from "./Pages/Klasifikace.tsx";
import Absence from "./Pages/Absence.tsx";
import Menu from "./Pages/Menu.tsx";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/menu' element={<Menu/>}></Route>
                <Route path='/klasifikace' element={<Klasifikace/>}></Route>
                <Route path='/absence' element={<Absence/>}></Route>
            </Routes>
        </HashRouter>
    );
};

export default App;

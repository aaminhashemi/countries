import "./App.css";
import Index from "./components/country/Index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Detail from './components/country/Detail'
function App() {

    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Index/>} ></Route>
                <Route path='/test' element={<Detail/>}></Route>
            </Routes>

        </BrowserRouter >
            )
}

export default App;

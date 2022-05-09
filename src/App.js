import Router from './routes/Router';
import './sass/index.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
  );
}

export default App;

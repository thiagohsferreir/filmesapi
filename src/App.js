import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Filmes from './Components/Filmes/Filmes';
import Series from './Components/Series/Series';

function App() {
  return (
    <div className="App">
      |<BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" Component={<Main/>}></Route>
        <Route path="/" Component={<Filmes/>}></Route>
        <Route path="/" Component={<Series/>}>Teste</Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}


// https://api.themoviedb.org/3/movie/popular?api_key=86641266e64be009a74cb0721cf6c720&language=pt-BR&page=1
export default App;

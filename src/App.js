import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
//config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Routes</h1>
      <BrowserRouter>
        <Navbar />
        {/* componente de busca*/}
        <SearchForm/>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={ <About/>} />
          {/* Rota dinâmica */ }
          <Route path="/products/:id" element={ <Product/>} />
          {/* Nested route*/}
          <Route path="/products/:id/info" element={ <Info/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/company" element={<Navigate to="/about"/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

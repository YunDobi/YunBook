
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import './App.css';
import { Register } from './components/Register';
import { useState } from 'react';
import { BookList } from './components/BookList';

function App() {
  const [login, setLogin] = useState(false);
  console.log(login);

  return (
    <div className="App">
      <Header status={login} setStatus= {setLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<BookList />} />
      </Routes>
      <Footer />
    </div>
  );
}
            
export default App;

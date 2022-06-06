import Style from './App.module.css';
import ResultPage from '../../Pages/ResultPage';
import { Routes, Route, Link } from 'react-router-dom';
import StartPage from '../../Pages/StartPage';
import { useState } from 'react';

const App = () => {
  const [labelValue, setLabelValue] = useState('');

  const labelChange = (e: any) => {
    setLabelValue(e.target.value);
  }

  return (
    <div className={Style.AppWrapper}>
      <header className={Style.Header_wrapper}>
        <Link to='/' className={Style.logo}>StackOverflow - Finder</Link>
        <div>
          <input className={Style.search_field} type='text' placeholder='Введите для поиска' onChange={labelChange} value={labelValue}/>
          <Link to='/results'>
            <button className={Style.search_button} >
              Поиск
            </button> 
          </Link>
        </div>
      </header>
      
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/results' element={<ResultPage searchValue={labelValue} />} />
      </Routes>

    </div>
  )
}

export default App;
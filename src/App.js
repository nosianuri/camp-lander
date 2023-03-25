import './App.css';
import { Route, Routes } from 'react-router-dom';
import Privacy from './Pages/Privacy/Privacy';
import Terms from './Pages/Terms/Terms';
import Camplejeune from './Pages/Camplejeune/Camplejeune';

function App() {
  return (
    <>
      <Routes>
        <Route path='/privacy-policy' element={<Privacy />}></Route>
        <Route path='/terms-condition' element={<Terms />}></Route>
        <Route path='/camplejeune' element={<Camplejeune />}></Route>
      </Routes>

    </>
  );
}

export default App;

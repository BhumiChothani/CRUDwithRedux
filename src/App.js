import './App.css';
import Table from './components/Table';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';

function App() {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
                <Route exact path='/' element={<Table/>}></Route>
                <Route exact path='/additem' element={<AddItem/>}></Route>
                <Route exact path='/updateitem/:id' element={<UpdateItem/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

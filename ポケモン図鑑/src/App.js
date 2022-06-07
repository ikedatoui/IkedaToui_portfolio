import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Serch from './serch';
import Type_serch from './type_serch';
import Header from './header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path='page1' element={<Serch />} />
          <Route path="page2" element={<Type_serch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

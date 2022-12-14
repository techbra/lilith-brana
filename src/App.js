import './App.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailsContainer';
import Error from './Components/Error';




function App() {
  
  return (
    
    <div className="App">
      <BrowserRouter>
       <Navbar />   
       <Routes>
      <Route path={"/"} element={<ItemListContainer greeting={"¡¡Porductos y Precios de otras Galaxia!!"} />} />
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />  
      <Route path={"*"} element={<Error />} />     
       </Routes>
      </BrowserRouter>
     

  
    </div>
   
  );
}

export default App;

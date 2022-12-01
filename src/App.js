import './App.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import fondo from "../src/Assets/azaz.jpg"
import { styles }  from "./Components/styles"



function App() {
  
  return (
    
    <div className="App">
      <Navbar />   
    
  <ItemListContainer greeting={"¡¡Porductos y Precios de otras Galaxia!!"} />
  <img style={styles.fondo}src={fondo} alt="" /> 
  
    </div>
   
  );
}

export default App;

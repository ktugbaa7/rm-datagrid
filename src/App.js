import { GridProvider } from "./context/GridContext";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <GridProvider>
      <Homepage />
    </GridProvider>
      
    
  );
}

export default App;


import { BrowserRouter} from "react-router-dom";
import { AppRoutes } from "./routes";
import { PropertyProvider } from "./components/contexts/PropertyContext";
import { BatchProvider } from "./components/contexts/BatchContext";

function App() {

  return (
    <BrowserRouter>
    <PropertyProvider>
      <BatchProvider>
        <AppRoutes/>
      </BatchProvider>
    </PropertyProvider>
    </BrowserRouter>
  )
}

export default App

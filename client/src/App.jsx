
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { PropertyProvider } from "./components/contexts/PropertyContext";
import { BatchProvider } from "./components/contexts/BatchContext";
import { ExpenseProvider } from "./components/contexts/ExpenseContext";
import { ProductionProvider } from "./components/contexts/ProductionContext";

function App() {

  return (
    <BrowserRouter>
      <PropertyProvider>
        <BatchProvider>
          <ExpenseProvider>
            <ProductionProvider>
              <AppRoutes />
            </ProductionProvider>
          </ExpenseProvider>
        </BatchProvider>
      </PropertyProvider>
    </BrowserRouter>
  )
}

export default App

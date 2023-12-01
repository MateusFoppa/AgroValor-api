
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { PropertyProvider } from "./components/contexts/PropertyContext";
import { BatchProvider } from "./components/contexts/BatchContext";
import { ExpenseProvider } from "./components/contexts/ExpenseContext";
import { ProductionProvider } from "./components/contexts/ProductionContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./components/contexts/UserContext";

// const contextClass = {
//   success: "bg-slate-800",
//   error: "bg-red-600",
//   info: "bg-gray-600",
//   warning: "bg-orange-400",
//   default: "bg-indigo-600",
//   dark: "bg-white-600 font-gray-300",
// };

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <PropertyProvider>
          <BatchProvider>
            <ExpenseProvider>
              <ProductionProvider>
                <AppRoutes />
                <ToastContainer
                  toastClassName="bg-slate-800 relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </ProductionProvider>
            </ExpenseProvider>
          </BatchProvider>
        </PropertyProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App

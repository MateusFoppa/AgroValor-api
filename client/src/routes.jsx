import { Route, Routes, Navigate } from "react-router-dom";
import PropertyList from "./pages/Property/propertyList";
import BatchList from "./pages/Batch/BatchList";
import UserList from "./pages/Users/UserList";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/Home/home";
import FinancesPage from "./pages/Finances/Finances";
import ExpensesPage from "./pages/Finances/Expenses/Expenses";
import ProductionPage from "./pages/Finances/Production/Production";
import { isAuth } from "./services/auth";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ element }) {
  return isAuth() ? (
    element
  ) : (
    <Navigate to="/" replace />
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/property" element={<PrivateRoute element={<PropertyList />} />} />
      <Route path="/batch" element={<PrivateRoute element={<BatchList />} />} />
      <Route path="/finance" element={<PrivateRoute element={<FinancesPage />} />} />
      <Route path="/expense" element={<PrivateRoute element={<ExpensesPage />} />} />
      <Route path="/production" element={<PrivateRoute element={<ProductionPage />} />} />
      <Route path="/user" element={<PrivateRoute element={<UserList />} />} />
      <Route path="/session" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

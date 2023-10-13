import { Route, Routes } from "react-router-dom";

import PropertyList from "./pages/Property/propertyList";
import BatchList from "./pages/Batch/BatchList";
import UserList from "./pages/Users/UserList";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LandingPage from "./pages/LandingPage/LandingPage";


export function AppRoutes() {
   return(
       <Routes>
           <Route path='/' element={<LandingPage />} />
           <Route path='/property' element={<PropertyList />} />
           <Route path='/batch' element={<BatchList />} />
           <Route path='/user' element={<UserList />} />
           <Route path='/session' element={<Login />} />
           <Route path='/register' element={<Register />} />
       </Routes>
   )
}

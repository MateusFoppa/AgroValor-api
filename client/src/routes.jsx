import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/home";
import PropertyList from "./pages/Property/propertyList";
import BatchList from "./pages/Batch/BatchList";
import UserList from "./pages/Users/UserList";
import Login from "./pages/Login/Login";


export function AppRoutes() {
   return(
       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/property' element={<PropertyList />} />
           <Route path='/batch' element={<BatchList />} />
           <Route path='/user' element={<UserList />} />
           <Route path='/session' element={<Login />} />
       </Routes>
   )
}

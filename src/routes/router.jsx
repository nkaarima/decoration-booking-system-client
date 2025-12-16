import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Authentication/SignUp";
import Login from "../pages/Authentication/Login";
import DashBoardLayout from "../layout/DashBoardLayout";

export const router= createBrowserRouter([

 {
    path:"/",
    element:<MainLayout></MainLayout>,
    children:
    
    [
         {
            index:true,
            element:<Home></Home>
         },

         {
            path:"/signup",
            element:<SignUp></SignUp>
         },

         {
            path:'/login',
            element:<Login></Login>
         }


    ]},

      {
         path:"/dashboard",
         element:<DashBoardLayout></DashBoardLayout>
      }

 








])
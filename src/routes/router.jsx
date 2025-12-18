import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Authentication/SignUp";
import Login from "../pages/Authentication/Login";
import DashBoardLayout from "../layout/DashBoardLayout";
import ManageService from "../pages/DashBoard/ManageService";
import MyProfile from "../pages/DashBoard/Shared/MyProfile";
import ServiceCardDetails from "../pages/Home/DecorationService/ServiceCardDetails";

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
            path:"signup",
            element:<SignUp></SignUp>
         },

         {
            path:'login',
            element:<Login></Login>
         },

          {
               path:"service-details",
               element:<ServiceCardDetails></ServiceCardDetails>
            },


    ]},
         

      {
         path:"/dashboard",
         element:<DashBoardLayout></DashBoardLayout>,
         children:
         [

            {
              index:true,
              element:<MyProfile></MyProfile>
            },

            {
                path:"manage-service",
                element:<ManageService></ManageService>
            }



         ]
      }

 








])
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Authentication/SignUp";
import Login from "../pages/Authentication/Login";
import DashBoardLayout from "../layout/DashBoardLayout";
import ManageService from "../pages/DashBoard/ManageService";
import MyProfile from "../pages/DashBoard/Shared/MyProfile";
import ServiceDetails from "../pages/Home/DecorationServiceCard/ServiceDetails";
import AllDecorationServices from "../pages/Home/AllDecorationServices/AllDecorationServices";

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
         },

         {
            path:"/services",
            element:<AllDecorationServices></AllDecorationServices>
         },

          {
               path:"/service-details/:id",
               element:<ServiceDetails></ServiceDetails>
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
            },

            {
               path:"my-profile",
               element:<MyProfile></MyProfile>
            }



         ]
      }

 








])
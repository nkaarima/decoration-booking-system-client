import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Authentication/SignUp";
import Login from "../pages/Authentication/Login";
import DashBoardLayout from "../layout/DashBoardLayout";
import ManageService from "../pages/DashBoard/AdminDashBoard/ManageService";
import MyProfile from "../pages/DashBoard/Shared/MyProfile";
import ServiceDetails from "../pages/Home/DecorationServiceCard/ServiceDetails";
import AllDecorationServices from "../pages/Home/AllDecorationServices/AllDecorationServices";
import ManageBooking from "../pages/DashBoard/UserDashBoard/ManageBooking";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentHistory from "../pages/DashBoard/UserDashBoard/PaymentHistory";
import ManageDecorators from "../pages/DashBoard/AdminDashBoard/ManageDecorators";
import AssignDecorator from "../pages/DashBoard/AdminDashBoard/AssignDecorator";
import ManageAccount from "../pages/DashBoard/AdminDashBoard/ManageAccount";
import PrivateRoute from "./PrivateRoute";
import ReviewBooking from "../pages/DashBoard/AdminDashBoard/ReviewBooking";
import MakeUserDecorator from "../pages/DashBoard/AdminDashBoard/MakeUserDecorator";
import AssignedProject from "../pages/DashBoard/DecoratorDashBoard/AssignedProject";
import AdminRoute from "./AdminRoute";
import DecoratorRoute from "./DecoratorRoute";


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
               element:
   
               
                 <PrivateRoute>
                  <ServiceDetails></ServiceDetails>
                 </PrivateRoute>
               
               
          }

          


    ]},
         

      {
         path:"/dashboard",
         element:
             
           <PrivateRoute>
            <DashBoardLayout></DashBoardLayout>
           </PrivateRoute>,
           
         
         
        
         children:
         [

            {
              index:true,
              element:       
                <MyProfile></MyProfile>        
              
            },

            {
                path:"manage-service",
                element:<ManageService></ManageService>
            },

            {
               path:"my-profile",
               element:<MyProfile></MyProfile>
            },

            {
               path:"my-booking",
               element:<ManageBooking></ManageBooking>
            },

             {
              path:"payment-success",
              element:<PaymentSuccess></PaymentSuccess>
          },

            {
               path:"payment-history/:email",
               element:<PaymentHistory></PaymentHistory>
            },

            {
               path:"manage-decorator",
               element:<AdminRoute>
                  <ManageDecorators></ManageDecorators>
               </AdminRoute>
            },

            {
               path:"assign-decorator",
               element:
               <AdminRoute>
                  <AssignDecorator></AssignDecorator>
               </AdminRoute>
            },

            {
               path:"approve-decorators",
               element:
               <AdminRoute>
                  <ManageAccount></ManageAccount>
               </AdminRoute>
            },

            {
               path:"review-booking",
               element:
               <AdminRoute>
                  <ReviewBooking></ReviewBooking>
               </AdminRoute>
            },

            {
               path:"user-decorator",
               element:
               <AdminRoute>
                  <MakeUserDecorator></MakeUserDecorator>
               </AdminRoute>
            },

            {
               path:"assigned-project",
               element:
               <DecoratorRoute>
                  <AssignedProject></AssignedProject>
               </DecoratorRoute>
            },

         ],

        
      },

     



])
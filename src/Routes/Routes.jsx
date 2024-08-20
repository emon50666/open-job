import {
    createBrowserRouter,
   
  } from "react-router-dom";

import Root from "../Layout/root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../components/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AddJob from "../Pages/AddJob/AddJob";
import Error from "../components/404/error";
import MyPostJob from "../Pages/MyPostJob/MyPostJob";
import Update from "../Pages/MyPostJob/UpdateJob/Update";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
          index: true,
          element: <Home></Home>,
       
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Register></Register>
        },
        {
          path: '/job/:id',
          element: <JobDetails></JobDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path: '/add-job',
          element: <AddJob></AddJob>
        },
        {
          path:'/my-job-post',
          element: <MyPostJob></MyPostJob>
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
      ]
    },
  ]);

  export default router;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import ProjectDetail from './layout/DetailsLayout/ProjectDetails/ProjectDetail';
import HomeLayout from "./layout/HomeLayout/HomeLayout"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <HomeLayout></HomeLayout>
      },
      {
        path:'projectDetail/:id',
        element:<ProjectDetail></ProjectDetail>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

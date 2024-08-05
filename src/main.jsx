import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/><Footer/></>,
  },
  {
    path: "/SignUp",
    element: <><Navbar /><SignUp/></>,
  },
  {
    path: "/SignIn",
    element: <><Navbar/><SignIn/></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <App />
    <RouterProvider router={router} />
  </>
  // </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './routes/Homepage/App.jsx';
import App1 from './routes/SearchedPage/App.jsx';
import App2 from './routes/Listing/App.jsx'
import App3 from './routes/Login/App.jsx'
import App4 from './routes/CreateAccount/App.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/SearchedPage",
    element: <App1/>,
  },
  {
    path: "/ListingPage",
    element: <App2/>,
  },
  {
    path: "/LoginPage",
    element: <App3/>,
  },
  {
    path: "/CreateAccount",
    element: <App4/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)

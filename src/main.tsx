import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { Suspense, lazy } from "react";

import NotFound from "./screens/notFound";
import Loader from './components/loader/loader.tsx';

const Training= lazy(() =>
  wait(1300).then(() => import("./screens/training.tsx"))
);

const Main= lazy(() =>
  wait(1300).then(() => import("./screens/main.tsx"))
);

const router = createBrowserRouter([
  {
    path: "/face-rec/",
    element: <App />,
    
    children: [
      {
        path: "/face-rec/", 
        element: <Navigate to="/face-rec/main" />, 
      },
      {
        path: "/face-rec/main",
        element: <>
        <Suspense fallback={<Loader />}>
          <Main />
        </Suspense>
      </>,
      },
      {
        path: "/face-rec/training",
        element: <>
        <Suspense fallback={<Loader />}>
          <Training />
        </Suspense>
      </>,
      },



      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function wait( time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

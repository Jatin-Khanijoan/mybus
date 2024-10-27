// import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './RootLayout';
import LandingPage from './pages/LandingPage';
import BusesPage from './pages/BusesPage';  
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "buses",
        element: <BusesPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      // {
      //   path: "dashboard",
      //   element: (
      //     <React.Suspense fallback={<div>Loading...</div>}>
      //       <Dashboard />
      //     </React.Suspense>
      //   ),
      // },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
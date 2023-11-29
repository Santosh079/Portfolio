import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gallery from './components/Gallary.jsx';
import FAQPage from './components/FAQPage.jsx';
import ContactUsPage from './components/ContactUsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/contact',
    element: <ContactUsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

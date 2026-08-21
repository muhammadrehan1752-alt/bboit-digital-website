import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home.tsx';
import { Invest } from './pages/Invest.tsx';
import { Discover } from './pages/Discover.tsx';
import { SectorsPage } from './pages/Sectors.tsx';
import { Gwadar } from './pages/Gwadar.tsx';
import { Trade } from './pages/Trade.tsx';
import { About } from './pages/About.tsx';
import { InvestorDesk } from './pages/InvestorDesk.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "invest", element: <Invest /> },
      { path: "discover", element: <Discover /> },
      { path: "sectors", element: <SectorsPage /> },
      { path: "gwadar", element: <Gwadar /> },
      { path: "trade", element: <Trade /> },
      { path: "about", element: <About /> },
      { path: "investor-desk", element: <InvestorDesk /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

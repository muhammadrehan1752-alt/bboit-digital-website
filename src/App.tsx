/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Outlet } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

import logo from './logo.svg';
import './App.scss';
import PortalLayout from './components/PortalLayout';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Main from './pages/Introduction';
import { Suspense } from 'react';
import { ContextProvider } from './utills/Context';
import { ToastContainer } from 'react-bootstrap';
import Aos from 'aos';
import Introduction from './pages/Introduction';
import About from './pages/About';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const router = createHashRouter([
  {
    path: "/",
    element: <PortalLayout />,
    // children: [
    //   { path: "intro", element: <Introduction /> },
    //   { path: "about", element: <About /> },
    //   { path: "resume", element: <Resume /> },
    //   { path: "skills", element: <Skills /> },
    //   { path: "portfolio", element: <Portfolio /> },
    //   { path: "contact", element: <Contact /> },
    // ]
  },
]);
window.onload = function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
  // Initialize AOS after scrolling to the top
  Aos.init();
};
function App() {
  return (
    <>
      <Suspense  > {/* Use your FullScreenLoader component here */}
        <ContextProvider>
          <ToastContainer autoClose={3000} />
          <RouterProvider router={router} />
        </ContextProvider>
      </Suspense>
    </>
  );
}

export default App;

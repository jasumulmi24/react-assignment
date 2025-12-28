import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Weather from './pages/Weather';
import NotFound from './pages/NotFound';
import { WeatherProvider } from './context/WeatherContext';


const router = createBrowserRouter([
   {
    path:"/",
    element: <MainLayout />,
    children: [
      {
         index: true,
         element: <Home />
      },
      {
         path: "expenses",
         element: <Expenses />
      },
      {
         path: "weather",
         element: <Weather />
      },
      {
         path: "*",
         element: <NotFound />
      }
    ]
   }]
);

function App() {
   return <>
    <WeatherProvider>
         <RouterProvider router={router} />
    </WeatherProvider>
   </> 
 

}

export default App

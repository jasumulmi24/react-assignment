import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Weather from './pages/Weather';
import NotFound from './pages/NotFound';
import { WeatherProvider } from './context/WeatherContext';
import { ExpenseProvider } from './context/ExpenseContext';


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
      <ExpenseProvider>
      <WeatherProvider>
         <RouterProvider router={router} />
      </WeatherProvider>
      </ExpenseProvider>
   </> 
}

export default App

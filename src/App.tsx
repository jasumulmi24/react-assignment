import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/Mainlayout';

const router = createBrowserRouter([
   {
    path:"/",
    element: <MainLayout />,
   }]);

function App() {
   return <RouterProvider router={router} />;
}

export default App

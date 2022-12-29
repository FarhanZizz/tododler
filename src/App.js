import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AddTask from './Pages/AddTask';
import MyTasks from './Pages/MyTasks';
import CompletedTasks from './Pages/CompletedTasks';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/addtask',
        element: <AddTask></AddTask>
      },
      {
        path: '/mytask',
        element: <MyTasks></MyTasks>
      },
      {
        path: '/completedtask',
        element: <CompletedTasks></CompletedTasks>
      }
    ]
  }
])

function App() {
  return (
    <div className='px-4'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

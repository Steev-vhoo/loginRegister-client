import './App.css'
import Login from './components/login/login'
import Register from './components/register/register'
import Landing from './components/landing/landing'


//Import react route dom
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


//Creating a router
const router = createBrowserRouter([
  {
    path: '/login',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/',
    element: <div><Landing/></div>
  }
])

function App() {
  

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

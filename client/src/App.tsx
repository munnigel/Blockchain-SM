import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import { DarkModeContext } from './context/theme-context'
import { useState } from 'react'


import './App.scss'

function App() {

  const currentUser = true

  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("darkMode")
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light'
    return localStorageTheme || browserDefault
  }

  const [darkMode, setDarkMode] = useState(getDefaultTheme());

  const Layout: React.FC = () => {
    return (
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar/>
          <div style={{ display: "flex" }}>
            <LeftBar/>
            <div style={{ flex: 6 }}>
              <Outlet/>  
            </div>
            <RightBar/>
          </div>
        </div>
      </DarkModeContext.Provider>
    )
  }

  const ProtectedRoute = ({ children }: { children: any }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App



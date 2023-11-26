import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import { DarkModeContext } from '../src/contexts/theme-context'
import { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'


import './App.scss'


function App() {

  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("darkMode")
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light'
    return localStorageTheme || browserDefault
  }

  const [darkMode, setDarkMode] = useState(getDefaultTheme());

  const getCurrentUser = () => {
    const user = localStorage.getItem('isUniversalProfileExtension')
    return user ? user : null
  }


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
    const [user, setUser] = useState(getCurrentUser());

    useEffect(() => {
      // This will run when the pathname changes (from registering or logging in)
      setUser(getCurrentUser());
    }, [window.location.pathname]); // Dependency on the pathname

    if (!user) {
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
          path: "/profile/:address",
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
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  )
}

export default App



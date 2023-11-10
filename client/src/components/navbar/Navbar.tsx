import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined"
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { SettingOutlined, DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { DarkModeContext } from '../../context/theme-context'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'

import "./navbar.scss"

const Navbar = () => {
  const name = useSelector((state: any) => state.account.name)
  const { darkMode, setDarkMode } = useContext(DarkModeContext)

  const toggle = () => {
    setDarkMode(!darkMode)
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const logout = () => {
    localStorage.removeItem('currentUser')
    window.location.reload()
  }
  
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Settings
        </a>
      ),
    },

    {
      key: '2',
      danger: true,
      label: (
        <div onClick={logout}>
          Logout
        </div>
      ),
    },
  ];

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className='navbar__left__logo'>HolaSocial</span>
        </Link>
        <HomeOutlinedIcon />
        {
          darkMode ? (
            <WbSunnyOutlinedIcon onClick={toggle} />
          ) : (
            <DarkModeOutlinedIcon onClick={toggle} />
          )
        }
        
        <WidgetsOutlinedIcon />
        <div className='navbar__left__search'>
          <SearchOutlinedIcon />
          <input 
            className='navbar__left__search__input' 
            type="text" 
            placeholder="Search..."
          />
        </div>
      </div>
      <div className='navbar__right'>
        <div className='navbar__right__user'>
          <Link to={`/profile/${name}`} className='navbar__right__user__link'>
            <img 
              className='navbar__right__user__userimage' 
              src="https://images.pexels.com/photos/4974360/pexels-photo-4974360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
            />
            <span className='navbar__right__user__username'>{name}</span>
          </Link>
        </div>

        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <SettingOutlined style={{fontSize: 25}}/>
              <DownOutlined style={{fontSize: 10}}/>
            </Space>
          </a>
        </Dropdown>

        
      </div>
    </div>
  )
}

export default Navbar
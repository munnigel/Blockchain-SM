import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./navbar.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className='navbar__left__logo'>HolaSocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
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
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className='navbar__right__user'>
          <img 
            className='navbar__right__user__userimage' 
            src="https://images.pexels.com/photos/4974360/pexels-photo-4974360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
          />
          <span className='navbar__right__user__username'>Dayan Nahshon</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
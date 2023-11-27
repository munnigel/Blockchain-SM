import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { SettingOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { DarkModeContext } from "../../contexts/theme-context";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import CachedProfilesAndPostsContext from "../../contexts/CachedProfilesAndPostsContext/CachedProfilesAndPostsContext";
import EthersContext from "../../contexts/EthersContext/EthersContext";
import { SocialNetworkProfile } from "../../types/SocialNetworkProfile";
import ConnectUniversalProfileButton from "../ConnectUniversalProfileButton";

import "./navbar.scss";

const Navbar = () => {
  const isMounted = useRef(false);
  const [profile, setProfile] = useState<null | SocialNetworkProfile>(null);
  const [error, setError] = useState<null | React.ReactNode>(null);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { universalProfile } = useContext(EthersContext);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  const { getProfile, getProfileFromCache, refetchAll } = useContext(
    CachedProfilesAndPostsContext
  );

  const address: string | undefined = universalProfile?.address;

  const initProfile = async (address: string) => {
    const profile = await getProfile(address, true);
    console.log(profile);
    if (!profile) setError(`Profile with address ${address} does not exist`);
    else setProfile(profile);
  };

  useEffect(() => {
    if (!address) return;
    if (!isMounted.current) isMounted.current = true;
    else return;

    initProfile(address);
  }, [address]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const logout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Settings
        </a>
      ),
    },

    {
      key: "2",
      danger: true,
      label: <div onClick={logout}>Logout</div>,
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar__left__logo">HolaSocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}

        <WidgetsOutlinedIcon />
        <div className="navbar__left__search">
          <SearchOutlinedIcon />
          <input
            className="navbar__left__search__input"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__user">
          {profile?.address ? (
            <Link
              to={`/profile/${profile?.address}`}
              className="navbar__right__user__link"
            >
              <img
                className="navbar__right__user__userimage"
                src={profile?.profileImage[0].url}
                alt=""
              />
              <span className="navbar__right__user__username">
                {profile?.name}
              </span>
            </Link>
          ) : (
            <ConnectUniversalProfileButton />
          )}
        </div>

        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <SettingOutlined style={{ fontSize: 25 }} />
              <DownOutlined style={{ fontSize: 10 }} />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;

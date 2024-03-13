import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <span>Appy</span>
        </Link>
        <HomeRoundedIcon />
        {darkMode ? (
          <LightModeRoundedIcon onClick={toggle} />
        ) : (
          <DarkModeRoundedIcon onClick={toggle} />
        )}
        <WidgetsRoundedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <Link
          to={`/profile/${currentUser.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <PersonRoundedIcon />
        </Link>
        <NotificationsRoundedIcon />
        <Link
          to={`/profile/${currentUser.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="user">
            <img src={"/upload/" + currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

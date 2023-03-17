import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "../UI/LogoutButton";
import NotificationBtn from "../UI/NotificationBtn";
import styles from "./TopNav.module.css";
import logout from "../assets/logout.svg";
import profile from "../assets/profileSmall.svg";

const TopMenu = (props) => {
    const navigate = useNavigate();
    const onClickingLogout = () => {
        props.onLogout();
        navigate("/", {replace: true});
    };

    return (
        <nav>
            <div className={styles["top-nav"]}>
                <Link to={"/"} className={styles.logo}>notFacebook</Link>
                <div className={styles.menu}>
                    <Link className={styles.lnk} to="/">Home</Link>
                    <Link className={styles.lnk} to="/group">Groups</Link>
                    <Link className={styles.lnk} to="/messanger">Messenger</Link>
                    <div className={styles.profile}>
                    {/* <img src={profile} alt=""/> */}
                    <Link className={styles.profile} to="/profile">
                    <img src={profile} alt=""/>
                    Maddie Wesst
                    </Link>
                    </div>
                </div>
                {/* <NotificationBtn>&#128276;</NotificationBtn> */}
                <LogoutButton onClick={onClickingLogout}><img src={logout} alt=""/></LogoutButton>
            </div>
        </nav>
        
    );
};

export default TopMenu;
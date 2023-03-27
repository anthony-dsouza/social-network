// import { Link, NavLink, useNavigate } from "react-router-dom";
// import LogoutButton from "../UI/LogoutButton";
// import NotificationBtn from "../UI/NotificationBtn";
// import styles from "./TopNav.module.css";
// import logout from "../assets/logout.svg";
// import profile from "../assets/profileSmall.svg";

// const TopMenu = (props) => {
//     let nickname;
//     let avatar;
//     const defaultImagePath = "default_avatar.jpg";
//     const userId = +localStorage.getItem("user_id");
//     const first = localStorage.getItem("fname");
//     const last = localStorage.getItem("lname");
//     nickname = localStorage.getItem("nname");
//     avatar = localStorage.getItem("avatar");
//     let details;

//     const navigate = useNavigate();

//     const onClickingLogout = () => {
//         props.onLogout();
//         navigate("/", {replace: true});
//     };
    
//     return (
//         <nav>
//             <div className={styles["top-nav"]}>
//                 <Link to={"/"} className={styles.logo}>notFacebook</Link>
//                 <div className={styles.menu}>
//                     <NavLink className={({isActive}) => isActive ? styles["active"] : undefined} to="/" end>Home</NavLink>
//                     <NavLink className={({isActive}) => isActive ? styles["active"] : undefined} to="/group" end>Groups</NavLink>
//                     <NavLink className={({isActive}) => isActive ? styles["active"] : undefined} to="/messanger" end>Messenger</NavLink>
//                     <div className={styles.profile}>
//                     {/* <img src={profile} alt=""/> */}
//                     <Link className={styles.profile} to={`/profile/${userId}`}>
//                     {!avatar && <img className={styles["avatar"]} src={require("../../images/"+`${defaultImagePath}`)} alt="" width={"35px"}/>}
//                     {avatar && <img src={avatar} alt="" width={"35px"}/>}
//                     {nickname ? `${first} ${last} (${nickname})` : `${first} ${last}`}
//                     </Link>
//                     </div>
//                 </div>
//                 {/* <NotificationBtn>&#128276;</NotificationBtn> */}
//                 <LogoutButton onClick={onClickingLogout}><img src={logout} alt=""/></LogoutButton>
//             </div>
//         </nav>
        
//     );
// };

// export default TopMenu;



import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "../UI/LogoutButton";
import NotificationBtn from "../UI/NotificationBtn";
import styles from "./TopNav.module.css";
import logout from "../assets/logout.svg";
import profile from "../assets/profileSmall.svg";

const TopMenu = () => {
    const navigate = useNavigate();

    const currUserId = localStorage.getItem("user_id");
    console.log("current user", currUserId);

    // const testID = '4'

    function handleClick(e) {
        const id = e.target.id
        console.log("profile id", id);

        navigate("/profile", { state: { id } })
    }

    return (
        <nav>
            <div className={styles["top-nav"]}>
                <div className={styles.logo}>notFacebook</div>
                <div className={styles.menu}>
                    <Link className={styles.lnk} to="/">Home</Link>
                    <Link className={styles.lnk} to="/group">Groups</Link>
                    <Link className={styles.lnk} to="/messanger">Messenger</Link>
                    {/* <Link className={styles.lnk} to="/profile" id={currUserId} onClick={handleClick}>Profile</Link> */}
                    <div id={currUserId} className={styles.profile} onClick={handleClick}>
                    {/* <img src={profile} alt=""/> */}
                    Profile
                    </div>
            </div>
                     {/* <div id={currUserId} className={styles.profile} onClick={handleClick}>
                    <img src={profile} alt=""/>
                    MaddieWesst
                    </div> */}

                {/* <NotificationBtn>&#128276;</NotificationBtn> */}

                <LogoutButton ><img src={logout} alt=""/></LogoutButton>
            </div>
        </nav>
        
    );
};

export default TopMenu;
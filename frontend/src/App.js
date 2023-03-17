import { useState } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Card from './components/UI/Card';
import Form from './components/UI/Form';
import Root from "./components/pages/Root";
import Landingpage from './components/pages/Landingpage';
import LoginForm from './components/pages/LoginForm';
import RegForm from './components/pages/RegForm';
import PostsPage from './components/pages/PostsPage';
import GroupPage from "./components/pages/GroupPage";
import GroupProfilePage from "./components/pages/GroupProfilePage";
// import ProfilePage from "./components/pages/ProfilePage";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const navigate = useNavigate();
  
  const loginURL = "http://localhost:8080/login/";
  const regURL = "http://localhost:8080/reg/";

//testing
  localStorage.setItem("user_id", 0);
  localStorage.setItem("fname", "Mickey");
  localStorage.setItem("lname", "Mouse");
  localStorage.setItem("nname", "Rat");

  const loginHandler = (loginPayloadObj) => {
    console.log("app.js", loginPayloadObj);
    const reqOptions = {
      method: "POST",
      body: JSON.stringify(loginPayloadObj)
    };
    fetch(loginURL, reqOptions)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        setLoggedIn(true);
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("fname", data.fname);
        localStorage.setItem("lname", data.lname);
        data.nname && localStorage.setItem("nname", data.nname);
        data.avatar && localStorage.setItem("avatar", data.avatar);
      }
    })
    .catch(err => {
      console.log(err);
    })
  };

  const regHandler = (regPayloadObj) => {
    console.log("app.js", regPayloadObj);
    const reqOptions = {
      method: "POST",
      body: JSON.stringify(regPayloadObj)
    };
  
    fetch(regURL, reqOptions)
      .then(resp => resp.json())
      .then(data => {
          console.log(data);
          if (data.success) {
            setLoggedIn(true);
            localStorage.setItem("user_id", data.user_id);
            localStorage.setItem("fname", data.fname);
            localStorage.setItem("lname", data.lname);
            data.nname && localStorage.setItem("nname", data.nname);
            data.avatar && localStorage.setItem("avatar", data.avatar);
          }
      })
      .catch(err => {
        console.log(err);
      })
  };
  
  const logoutHandler = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  let router = createBrowserRouter([
    {path: "/", element: <Landingpage />},
    {path: "/login", element: <LoginForm onLogin={loginHandler}/>},
    {path: "/reg", element: <RegForm onReg={regHandler}/>},
    {path: "/groupprofile", element: <GroupProfilePage />},
    {path: "/groups", element: <GroupPage />},
  ]);

  // if (loggedIn) 
  router = createBrowserRouter([
    {
      path: "/",
      element: <Root onLogout={logoutHandler} />,
      children: [
        {path: "/reg", element: <RegForm onReg={regHandler}/>}, // temp
          {path: "/", element: <PostsPage />},
          // {path: "/profile", element: <ProfilePage />},
          {path: "/group", element: <GroupPage />},
          {path: "/groupprofile", element: <GroupProfilePage />},
          {path: "/groups", element: <GroupPage />},
      ],
    }
  

  ]);

  return <RouterProvider router={router}/>;
}

export default App;

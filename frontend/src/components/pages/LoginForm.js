import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../UI/Form';
import FormInput from "../UI/FormInput";
import FormLabel from "../UI/FormLabel";
import LgButton from "../UI/LgButton";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {  
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPw, setEnteredPw] = useState("");

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
        console.log(enteredEmail);
    };
    const pwChangeHandler = (e) => {
        setEnteredPw(e.target.value);
        console.log(enteredPw);
    };
        
    const submitHandler = (e) => {
        e.preventDefault();
        const loginPayloadObj = {
            email: enteredEmail,
            pw: enteredPw
        };
        console.log(loginPayloadObj);

        props.onLogin(loginPayloadObj);
        
        setEnteredEmail("");
        setEnteredPw("");
    };

    return (
        <>
            <h1 className={styles["title"]}>Login</h1>
            <Form className={styles["login-form"]} onSubmit={submitHandler}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput className={styles["login-input"]} name="email" id="email" placeholder="abc@mail.com" value={enteredEmail} onChange={emailChangeHandler}/>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput className={styles["login-input"]} type="password" name="password" id="password" placeholder="Password" value={enteredPw} onChange={pwChangeHandler}/>
                <LgButton className={styles["sub-btn"]} type="submit">Login</LgButton>
                <p>Don't have an account? <Link to={"/reg"}>Register</Link></p>
            </Form>
        </>
        
    )
};

export default LoginForm;
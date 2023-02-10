import React, { useState } from "react";
import Form from '../UI/Form';
import FormInput from "../UI/FormInput";
import FormLabel from "../UI/FormLabel";
import SubmitButton from "../UI/SubmitButton";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    const loginURL = "http://localhost:8080/login/";
    
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

        const reqOptions = {
            method: "POST",
            body: JSON.stringify(loginPayloadObj)
        };
        fetch(loginURL, reqOptions)
        .then(resp => {
            const respObj = resp.json();
            console.log(respObj);
            
        }
        )
        // setEnteredEmail("");
        // setEnteredPw("");
    };

    return (
        <Form className={styles["login-form"]} onSubmit={submitHandler}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput name="email" id="email" placeholder="abc@mail.com" value={enteredEmail} onChange={emailChangeHandler}/>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" name="password" id="password" placeholder="Password" value={enteredPw} onChange={pwChangeHandler}/>
            <SubmitButton type="submit">Login</SubmitButton>
            <p>Don't have an account? Register one</p>
        </Form>
    )
};

export default LoginForm;
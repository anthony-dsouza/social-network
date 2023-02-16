import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../UI/Form';
import FormInput from "../UI/FormInput";
import FormLabel from "../UI/FormLabel";
import FormTextarea from "../UI/FormTextarea";
import LgButton from "../UI/LgButton";
import styles from "./RegForm.module.css";

const RegForm = (props) => {    
    const imageSrc = "../../images/";
    // let imagePath = "default_avatar.jpg";

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPw, setEnteredPw] = useState("");
    const [enteredFName, setEnteredFName] = useState("");
    const [enteredLName, setEnteredLName] = useState("");
    const [enteredDoB, setEnteredDoB] = useState("");
    const [uploadedImgPath, setUploadedImgPath] = useState("default_avatar.jpg");
    const [enteredNickname, setEnteredNickname] = useState("");
    const [enteredAbout, setEnteredAbout] = useState("");

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
        console.log(enteredEmail);
    };
    const pwChangeHandler = (e) => {
        setEnteredPw(e.target.value);
        console.log(enteredPw);
    };
    const fNameChangeHandler = (e) => {
        setEnteredFName(e.target.value);
        console.log(enteredFName);
    };
    const lNameChangeHandler = (e) => {
        setEnteredLName(e.target.value);
        console.log(enteredLName);
    };
    const doBChangeHandler = (e) => {
        setEnteredDoB(e.target.value);
        console.log(enteredDoB);
    };
    const avatarHandler = (e) => {
        setUploadedImgPath(e.target.value);
        console.log(uploadedImgPath);
    };
    const nicknameChangeHandler = (e) => {
        setEnteredNickname(e.target.value);
        console.log(enteredNickname);
    };
    const aboutChangeHandler = (e) => {
        setEnteredAbout(e.target.value);
        console.log(enteredAbout);
    };
        
    const submitHandler = (e) => {
        e.preventDefault();
        const regPayloadObj = {
            email: enteredEmail,
            pw: enteredPw
        };
        console.log(regPayloadObj);

        props.onReg(regPayloadObj);
        
        // setEnteredEmail("");
        // setEnteredPw("");
    };

    return (
        <>
            <h1 className={styles["title"]}>Register</h1>
            <Form className={styles["reg-form"]} onSubmit={submitHandler}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput className={styles["reg-input"]} type="email" name="email" id="email" placeholder="abc@mail.com" value={enteredEmail} onChange={emailChangeHandler}/>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput className={styles["reg-input"]} type="password" name="password" id="password" placeholder="Password" value={enteredPw} onChange={pwChangeHandler}/>
                <FormLabel htmlFor="fname">First Name</FormLabel>
                <FormInput className={styles["reg-input"]} type="text" name="fname" id="fname" placeholder="John" value={enteredFName} onChange={fNameChangeHandler}/>
                <FormLabel htmlFor="lname">Last Name</FormLabel>
                <FormInput className={styles["reg-input"]} type="text" name="lname" id="lname" placeholder="Smith" value={enteredLName} onChange={lNameChangeHandler}/>
                <FormLabel htmlFor="DoB">Date of Birth</FormLabel>
                <FormInput className={styles["reg-input"]} type="date" name="DoB" id="DoB" value={enteredDoB} onChange={doBChangeHandler}/>
                <FormLabel htmlFor="img">Avatar (Optional)</FormLabel>
                <figure>
                    <img src={require("../../images/"+`${uploadedImgPath}`)} alt="Preview Uploaded Image" width={"220px"}/>
                    <figcaption><p>Preview Uploaded Image</p></figcaption>
                </figure>
                <FormInput className={styles["reg-input"]} type="file" name="avatar" id="avatar" onChange={avatarHandler}/>
                <FormLabel htmlFor="nname">Nickname (Optional)</FormLabel>
                <FormInput className={styles["reg-input"]} type="text" name="nname" id="nname" placeholder="Pikachu" value={enteredNickname} onChange={nicknameChangeHandler}/>
                <FormLabel htmlFor="about">About Me (Optional)</FormLabel>
                <FormTextarea className={styles["reg-input"]} name="about" id="about" placeholder="About me..." rows={5} value={enteredAbout} onChange={aboutChangeHandler}/>
                <LgButton className={styles["sub-btn"]} type="submit">Register</LgButton>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </Form>
        </>
        
    )
};

export default RegForm;
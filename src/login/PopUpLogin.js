/**
 * PopUpLogin is responsible for rendering and containing the logic for a user to successfully click a button
 * which will propmt the DevExtreme Popup component to appear and login using the provided web form. 
 * The goal is for the login to be stored in localStorage in order to achieve logging in one per entire
 * web browser. Some of the token setting logic will also live here.
 * 
 * Notes: STILL NEED TO IMPLEMENT THE USER TABLES IN API
 */

import { Popup } from "devextreme-react";
import { sqlDateToDateString, today } from "../utils/helperFunctions";
import { getWebUser, updateWebUserLoginTime, updateWebUserPassword } from "../utils/api";
import { useState } from "react";

export default function PopUpLogin({...props}) {
    const {popUpVisible, setPopUpVisible, setIsPasswordCorrect, setToken} = props;
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isPasswordBeingReset, setIsPasswordBeingReset] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");
    //HANDLES POP UP LOGIN FORM
    const handleLogin = async (e) => {
        console.log("Logging In!")
        console.log("Today's date: ", sqlDateToDateString(today()));
        e.preventDefault();
        //Need to figure out how to catch the error and still make the login successful.
        const response = await getWebUser({username: username, password: password});
        if(response.length === 1) {
            console.log(`Successful Login with User: ${response[0].userName}`, response[0]);
            setIsPasswordCorrect(true);
            setPopUpVisible(false);
            setToken(response[0].userName);
            const loginTimeUpdated = await updateWebUserLoginTime({username: username});
            console.log(`Login User Time Update: ${loginTimeUpdated}, ${username}`);
        } else {
            console.log("Unsuccessful Login.");
            setIsPasswordCorrect(false);
            alert(`Login unsuccessful. Username/Password is incorrect.`)
            setPassword("");
            return;
        }
    }
    const handleLoginCancel = () => {
        setPopUpVisible(false);
        setPassword("");
    }
    const handlePopUpInputChange = ({target}) => {
        //console.log("Pop Up value: ", target.value);
        //setPopUpForm({...popUpForm, [target.name]: target.value})
        //target.name === 'password' ? password = target.value : username = target.value;
        target.name === 'password' ? setPassword(target.value) : setUsername(target.value);
    }
    const handleResetPasswordButtonClick = () => {
        setIsPasswordBeingReset(true);
        setPopUpVisible(false);
    }
    const handleResetPasswordCancel = () => {
        setIsPasswordBeingReset(false);
        setPopUpVisible(true);
    }
    const handleResetInputChange = ({target}) => {
        if(target.name === "userEmail") {
            setUserEmail(target.value);
        } else if(target.name === "currentPassword") {
            setCurrentPassword(target.value);
        } else {
            setNewPassword(target.value);
        }
    }
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        console.log("Resetting Password Now!");
        console.log(`Reset Password Form Data:\nuserEmail: ${userEmail}\ncurrentPassword: ${currentPassword}\nnewPassword: ${newPassword}`);
        const passwordResetResponse = await updateWebUserPassword({ username: userEmail, currentPassword: currentPassword, newPassword: newPassword});
        if (passwordResetResponse === -1) {
            alert(`Username/Current Password is incorrect. Please try again`);
            setCurrentPassword("");
            setNewPassword("");
        } else if (passwordResetResponse === 0) {
            alert(`An account was matched but the update query failed.`);
        } else if (passwordResetResponse === 1) {
            alert(`Your password has been updated succesfully! You may now log in with your new password.`)
        }
    }

    return (
        <>
            <Popup visible={popUpVisible} onHiding={() => setPopUpVisible(false)} dragEnabled width={600} height={600} title="Login Credentials">
                <form id="pop-up-body-form" onSubmit={handleLogin}>
                    <div id='username-input-container'>
                        <label htmlFor="username" className="form-label">Username</label>
                        <input className="form-control" name='username' id="username" value={username} onChange={handlePopUpInputChange} />
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input className="form-control" id="password" name='password' type='password' value={password} onChange={handlePopUpInputChange} />
                    </div>
                    <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                    <button className="btn btn-secondary btn-sm" type="button" onClick={handleResetPasswordButtonClick}>Reset Password</button>
                    <button className="btn btn-danger btn-sm" type="button" onClick={handleLoginCancel}>Cancel</button>
                </form>
            </Popup>
            <Popup visible={isPasswordBeingReset} onHiding={() => setIsPasswordBeingReset(false) && setPopUpVisible(true)} dragEnabled width={600} height={600} title="Reset Password">
                <form id="reset-password-form" onSubmit={handlePasswordReset}>
                    <div id='usernEmail-input-container'>
                        <label htmlFor="userEmail" className="form-label">Username</label>
                        <input className="form-control" name='userEmail' id="userEmail" value={userEmail} onChange={handleResetInputChange} />
                    </div>
                    <div>
                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                        <input className="form-control" id="currentPassword" name='currentPassword' type='password' value={currentPassword} onChange={handleResetInputChange} />
                    </div>
                    <div>
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input className="form-control" id="newPassword" name='newPassword' type='password' value={newPassword} onChange={handleResetInputChange} />
                    </div>
                    <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                    <button className="btn btn-danger btn-sm" type="button" onClick={handleResetPasswordCancel}>Cancel</button>
                </form>
            </Popup>
        </>
    )
}
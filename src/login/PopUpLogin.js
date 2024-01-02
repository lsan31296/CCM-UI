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
import { getWebUser, updateWebUserLoginTime } from "../utils/api";
import { useState } from "react";

export default function PopUpLogin({...props}) {
    const {popUpVisible, setPopUpVisible, setIsPasswordCorrect, setToken} = props;
    //let password;
    //let username;
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
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
    return (
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
                <button className="btn btn-danger btn-sm" type="button" onClick={handleLoginCancel}>Cancel</button>
            </form>
        </Popup>
    )
}
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

export default function PopUpLogin({...props}) {
    const {popUpVisible, setPopUpVisible, setIsPasswordCorrect, setToken} = props;
    let password;
    let username;
    //HANDLES POP UP LOGIN FORM
    const handleLogin = (e) => {
        console.log("Logging In!")
        console.log("Today's date: ", sqlDateToDateString(today()));
        e.preventDefault();
        //Need to implment token here.
        if(password === 'ccmisthebest') {
            console.log(`Successful Login with User: ${username}`);
            setIsPasswordCorrect(true);
            setPopUpVisible(false);
        } else {
            console.log("Unsuccessful Login.");
            setIsPasswordCorrect(false);
            alert(`No rows were affected. Username/Password is incorrect.`)
            return;
        }
    }
    const handleLoginCancel = () => {
        setPopUpVisible(false);
    }
    const handlePopUpInputChange = ({target}) => {
        //console.log("Pop Up value: ", target.value);
        //setPopUpForm({...popUpForm, [target.name]: target.value})
        target.name === 'password' ? password = target.value : username = target.value;
    }
    return (
        <Popup visible={popUpVisible} onHiding={() => setPopUpVisible(false)} dragEnabled width={600} height={600} title="Login Credentials">
            <form id="pop-up-body-form" onSubmit={handleLogin}>
                <div id='username-input-container'>
                    <label htmlFor="username" className="form-label">Username</label>
                    <input className="form-control" name='username' id="username" /*value={username}*/ onChange={handlePopUpInputChange} />
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input className="form-control" id="password" name='password' type='password' /*value={password}*/ onChange={handlePopUpInputChange} />
                </div>
                <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                <button className="btn btn-danger btn-sm" type="button" onClick={handleLoginCancel}>Cancel</button>
            </form>
        </Popup>
    )
}
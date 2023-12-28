/**
 * usePassword acts as a custom React Hook. Essentially it will be responsible for getting and setting
 * username password pair from localStorage. usePassword will enable users to login with their
 * credentials and store the credentials so that user can open multiple tabs or refresh but will
 * not need to login several times.
 */

import { useState } from "react";

export default function useToken() {

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');//retrieves password/username token from
        const userToken = JSON.parse(tokenString);//converts token json into a JS object
        return userToken;//returns token if it exists
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}
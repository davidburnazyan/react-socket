import { LOGIN_SUCCESS } from './types';
import axios from 'axios';
import config from '../helpers/config';
import jwtDecode from "jwt-decode";

export const isAuth = dispatch => {
    const url = `${config.baseAPIUrl}/user/check-auth`
    axios.defaults.headers['Authorization'] = localStorage.getItem('jwt-token');
    axios.post(url)
        .then(result => {
            const { token } = result.data.payload;
            const { name } = jwtDecode(token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { token, name }
            })
        })
        .catch(error => {
            console.log(error)
        })
}
export const Sing_in = ({email, password}, dispatch) => {
    const url = `${config.baseAPIUrl}/user/sign-in`;
    axios.post(url, {email, password})
        .then(result => {
            const { token } = result.data;
            if(token){
                localStorage.setItem('jwt-token',token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        token: token
                    }
                })
            }else {
                // Error ...
            }
        })
        .catch(error => {
            console.log(error)
        });
};
export const Sign_Out = (token, dispatch) => {
    const url = `${config.baseAPIUrl}/user/sign-out`;
    axios.post(url)
        .then(result => {

            const { message, token } = result.data;
            if(message === 'Sign out Done'){
                localStorage.removeItem('jwt-token');
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { token }
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
}
export const Sign_Up = ({ name, surname, email, password, confirm, image }, dispatch) => {
    const formData = new FormData();
    formData.append('name',name);
    formData.append('surname',surname);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('confirm',confirm);
    if(image !== null)
        formData.append('avatar', image, image.name);

    fetch(`${config.baseAPIUrl}/user/sign-up`, {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: formData
    })
        .then(result => {
            if(result){
                Sing_in({ email, password }, dispatch)
            }else {
                console.log(result)
            }
        })
        .catch(error => {
            console.log(error);
        })
}
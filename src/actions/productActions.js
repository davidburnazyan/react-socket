import { LOAD_INFO_FOR_HOME, GET_PRODUCT_AND_MESSAGE } from './types';
import React from 'react';
import axios from 'axios';
import config from '../helpers/config';
import jwt_decode from "jwt-decode";

export const Load_info_for_home = dispatch => {
    const url = `${config.baseAPIUrl}/product`;
    axios.get(url)
        .then(result => {
            dispatch({
                type: LOAD_INFO_FOR_HOME,
                payload: result.data.result
            })
        })
        .catch(error => console.log(error))
}
export const load_product_and_messages = (dispatch, id) => {
    const dispatchOnlyProduct = (product) => {
        dispatch({
            type: GET_PRODUCT_AND_MESSAGE,
            payload: {
                product: product.data.result
            }
        })
    }
    const url = `${config.baseAPIUrl}`;
    axios.get(`${url}/product/${id}`)
        .then(product => {
            if(localStorage['jwt-token'] !== undefined){
                const user = jwt_decode(localStorage['jwt-token'])
                if(user){
                    axios.get(`${url}/message/product/${id}`)
                        .then(messages => {
                            const { result } = messages.data
                            if(result.length > 0){
                                const mess = result.map((elem, item) => <p key={item}>{elem.byUser.name}:{elem.message} </p>)
                                dispatch({
                                    type: GET_PRODUCT_AND_MESSAGE,
                                    payload: {
                                        product: product.data.result,
                                        messages: mess
                                    }
                                })
                            }else {
                                dispatchOnlyProduct(product)
                            }
                        })
                        .catch(error => console.error(error))
                }else {
                    dispatchOnlyProduct(product)
                }
            }else {
                dispatchOnlyProduct(product)
            }
        })
        .catch(error => console.error(error))
}
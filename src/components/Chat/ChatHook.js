import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from "jwt-decode";
import {View, Button, Input, Img} from '../Styled';

const ChatPortal = (props) => {
    const [message, setMessage] = useState('');
    const [tag, setTag] = useState([]);
    const { token } = props.auth;


    useEffect(() => {
        props.socket.on('customError', function (err) {
            console.error(new Error(err))
        });
        props.socket.on('show message', function (object) {
            addMessage(object)
        });
    }, [])

    const addMessage = (object) => {
        const p = [object.message].map(item => {
            return (
                <p key={tag.length + 1 }>
                    {object.name}: {object.message}
                </p>
            )
        })

        if(tag.length > 0){
            setTag([...tag, ...p])
        }else {
            setTag([...p])
        }
    }
    const sendMessage = (event) => {
        event.preventDefault();
        props.socket.emit('add message', {
            message: message,
            productId: props.productId,
            token: localStorage['jwt-token']
        })
    }





    const updateValue = (event) => {
        setMessage(event.target.value)
    }
    if(props.portal === false && token !== false && Object.keys(jwt_decode(token)).length > 0){
        return (
            <View positionRight onClick={() => { props.triggerPortal() }}>
                <Img src='/images/other/mail.png'/>
            </View>
        )
    }
    if(props.portal === true) {
        const html = (
            <>
                <View positionRight onClick={() => { props.triggerPortal() }}>
                    <Img src='/images/other/mail.png'/>
                </View>
                <View positionChat>
                    <View>
                        <form onSubmit={sendMessage}>
                            <Input type="text" onChange={updateValue}/>
                            <Button sendMessage>Send</Button>
                        </form>
                    </View>
                    <View>
                        {props.messages}
                        {tag}
                    </View>
                </View>
            </>
        )
        return ReactDOM.createPortal(html, document.getElementById('modal'))
    }else {
        return null
    }
}

export default ChatPortal
import React from 'react';
import {Img, Input, View} from "../Styled";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            tag: []
        }
        const saveThis = this.addMessage
        props.socket.on('show message', function (object) {
            saveThis(object);
        });
    }
    updateValue = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    addMessage = (object) => {
        const { tag } = this.state;
        const p = [object.message].map(item => {
            return (
                <p key={tag.length + 1 }>
                    {object.name}: {object.message}
                </p>
            )
        })

        if(tag.length > 0){
            this.setState({
                tag: [...tag, ...p]
            })
        }else {
            this.setState({
                tag: [...p]
            })
        }
    }
    sendMessage = (event) => {
        event.preventDefault();
        this.props.socket.emit('add message', {
            message: this.state.message,
            productId: this.props.productId,
            token: localStorage['jwt-token']
        })
    }
    render() {
        const { props } = this;
        const { portal } = this.props;
        const { token } = this.props.auth;

        if(portal === false && token !== false && Object.keys(jwt_decode(token)).length > 0){
            return (
                <View positionRight onClick={() => { props.triggerPortal() }}>
                    <Img src='/images/other/mail.png'/>
                </View>
            )
        }
        if(portal === true) {
            const html = (
                <>
                    <View positionRight onClick={() => { props.triggerPortal() }}>
                        <Img src='/images/other/mail.png'/>
                    </View>
                    <View positionChat>
                        <View>
                            <form onSubmit={this.sendMessage}>
                                <Input type="text" chatInput onChange={this.updateValue}/>
                            </form>
                        </View>
                        <View>
                            {props.messages}
                            {this.state.tag}
                        </View>
                    </View>
                </>
            )
            return ReactDOM.createPortal(html, document.getElementById('modal'))
        }else {
            return null
        }
    }

}

export default Chat;
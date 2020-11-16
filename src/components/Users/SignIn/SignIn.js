import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect  } from 'react-router-dom';
import { Sing_in } from '../../../actions/userActions';
import SimpleReactValidator from 'simple-react-validator';
import { View, HTag, Button, Label, Form, Input } from '../../Styled';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.validator = new SimpleReactValidator({
            validators: {
                email: {
                    message: 'Please write valid email',
                    rule: (val, params, validator) => {
                        return validator.helpers.testRegex(val,/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) && params.indexOf(val) === -1
                    },
                    required: true
                },
                password: {
                    message: 'Password must be consist although of one uppercase letter and with number',
                    rule: (val, params, validator) => {
                        return validator.helpers.testRegex(val,/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/) && params.indexOf(val) === -1
                    },
                    required: true
                }
            }
        });
    }
    changeValue = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        if (this.validator.allValid()) {
            const { email, password } = this.state;
            const user = {
                email,
                password
            };
            this.props.Sing_in(user, this.props.dispatch)
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }
    }
    generatePage = () => {
        const { isAuth } = this.props;
        const { email, password } = this.state;
        if(isAuth.token) {
            return <Redirect to='/' />
        } else {
            return (
                <div>
                    <Form sign onSubmit={this.onSubmit}>
                        <View>
                            <HTag signPageH1>
                                Sign In
                            </HTag>
                            <View labelAndInput>
                                <Label htmlFor='email'> Email </Label>
                                <Input sign type='text' onChange={this.changeValue('email')} id='email' value={email}/>
                            </View>
                            <View labelAndInput>
                                <Label htmlFor='password'> Password </Label>
                                <Input sign type='password' onChange={this.changeValue('password')} id='password' value={password}/>
                            </View>
                            <View alignButton>
                                <Button submit> Continue </Button>
                            </View>
                        </View>
                    </Form>
                    <View errorMessages>
                        <div>{this.validator.message('email', this.state.email, 'required|email')}</div>
                        <div>{this.validator.message('password', this.state.password, 'required|password')}</div>
                    </View>
                </div>
            )
        }
    }
    render() {
        return (
            this.generatePage()
        )
    }
}

const mapDispatchToProps = dispatch =>  {
    return {
        dispatch , Sing_in
    }
}
const mapStateToProps = token => {
    return token
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
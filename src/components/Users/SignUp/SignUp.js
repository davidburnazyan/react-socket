import React, { Component } from 'react';
import Avatar from '../../Avatar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Sign_Up } from "../../../actions/userActions";
import SimpleReactValidator from 'simple-react-validator';
import { Form, HTag, View, Input, Button, Label } from '../../Styled';

class SignUp extends Component {
    constructor(props){
        super(props)
        this.imagePath = '/images/other/default-user.png';
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirm: '',
            image: null,
            DataURL: this.imagePath
        }
        this.validator = new SimpleReactValidator({
            validators: {
                name: {
                    message: 'Name must be consist of letters, length from 3 to 16',
                    rule: (val, params, validator) => {
                        return validator.helpers.testRegex(val,/^(?=.{3,16}$)+[a-zA-Z]+([a-zA-Z])*$/) && params.indexOf(val) === -1
                    },
                    required: true
                },
                surname: {
                    message: 'Surname must be consist of letters, length from 3 to 20',
                    rule: (val, params, validator) => {
                        return validator.helpers.testRegex(val,/^(?=.{3,20}$)+[a-zA-Z]+([a-zA-Z])*$/) && params.indexOf(val) === -1
                    },
                    required: true
                },
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
                },
                confirm: {
                    message: 'Password not match',
                    rule: (val, params, validator) => {
                        return val === this.state.password
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
    chooseImage = (event) => {
        const mainThis = this;
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.readAsDataURL(file);
        reader.onload = function() {
            mainThis.setState({
                DataURL: reader.result,
                image: file
            })
        };
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.validator.allValid()) {
            const { name, surname, email, password, confirm, image } = this.state;
            Sign_Up({ name, surname, email, password, confirm, image },this.props.dispatch)
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }

    }
    generatePage = () => {
        const { isAuth } = this.props;
        const { name, surname, email, password, confirm , DataURL } = this.state;
        if(isAuth.token) {
            return <Redirect to='/' />
        } else {
            return (
                <div>
                    <Form sign onSubmit={this.handleSubmit}>
                        <View>
                            <HTag signPageH1>
                                Sign Up
                            </HTag>
                            <View labelAndInput>
                                <Label htmlFor='name'>Name</Label>
                                <Input sign type='text' name="name" onChange={this.changeValue('name')} id='name' value={name}/>
                            </View>
                            <View labelAndInput>
                                <Label htmlFor='surname'>Surname</Label>
                                <Input sign type='text' name="surname" onChange={this.changeValue('surname')} id='surname' value={surname}/>
                            </View>
                            <View labelAndInput>
                                <Label htmlFor='email'>Email</Label>
                                <Input sign type='text' name="email" onChange={this.changeValue('email')} id='email' value={email}/>
                            </View>
                            <View labelAndInput>
                                <Label htmlFor='password'>Password</Label>
                                <Input sign type='password' onChange={this.changeValue('password')} id='password' value={password}/>
                            </View>
                            <View labelAndInput>
                                <Label htmlFor='confirm'>Confirm password</Label>
                                <Input sign type='password' onChange={this.changeValue('confirm')} id='confirm' value={confirm}/>
                            </View>
                            <View>
                                <Avatar src={DataURL} callBack={(e) => {
                                    this.chooseImage(e)
                                }}/>
                            </View>
                            <View alignButton>
                                <Button submit>
                                    Continue
                                </Button>
                            </View>
                        </View>
                    </Form>
                    <View errorMessages>
                        <div>{this.validator.message('name', this.state.name, 'required|name')}</div>
                        <div>{this.validator.message('surname', this.state.surname, 'required|surname')}</div>
                        <div>{this.validator.message('email', this.state.email, 'required|email')}</div>
                        <div>{this.validator.message('password', this.state.password, 'required|password')}</div>
                        <div>{this.validator.message('confirm', this.state.confirm, 'required|confirm')}</div>
                    </View>
                </div>
            )
        }
    }
    render() {
       return(
           this.generatePage()
        )
    }
}

const mapStateToProps = isAuth => {
    return isAuth
}
export default connect(mapStateToProps)(SignUp);
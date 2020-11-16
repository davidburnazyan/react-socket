import React, { Component, } from 'react';
import { Chat } from '../Chat';
import Loader from "../Loader";
import { View } from '../Styled';
import { connect } from 'react-redux';
import ProductInfo from '../ProductInfo';
import ProductImages from '../ProductImages';
import socketIoClient from 'socket.io-client';
import { load_product_and_messages } from '../../actions/productActions';

class Product extends Component {
    constructor(props){
        super(props)
        const { dispatch, match } = props;
        this.state = {
            portal: false
        }
        this.endpoint = 'http://localhost:4000';
        this.socket = socketIoClient(this.endpoint);
        load_product_and_messages(dispatch,match.params.id)
    }
    triggerPortal = () => {
        this.setState({ portal: !this.state.portal })
    }
    render () {
        const { loader } = this.props;
        if(loader === undefined){
            return <Loader />
        }else {
            const { product } = this.props;
            return (
                <View productImg>
                    <ProductImages images={this.props.product.images}/>
                    <ProductInfo product={product}/>
                    <Chat
                        triggerPortal={this.triggerPortal}
                        messages={this.props.messages}
                        auth={this.props.isAuth}
                        portal={this.state.portal}
                        socket={this.socket}
                        productId={this.props.match.params.id}/>
                </View>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(Product)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text, View } from '../Styled'
import { Load_info_for_home } from '../../actions/productActions';

class Home extends Component {
    constructor(props) {
        super(props);
        Load_info_for_home(props.dispatch,props.params)
    }
    renderContainer = () => {
        if(this.props.load === true){
            return (
                <View homeLoad>
                    <img src="/images/other/load.gif" alt=""/>
                </View>
            )
        }else {
            const { products } = this.props;
            if(products.length === 0){
                return (
                    <View center>
                        <p>Empty</p>
                    </View>
                )
            } else {
                return products.map((element, index) => {
                    const random = Math.floor(Math.random() * element.images.length);
                    const backImage = element.images[Math.floor(Math.random() * random)]

                    return (
                        <View products key={index} backImage={backImage}>
                            <Link to={`/product/${element._id}`}>
                                <View backPhoneForBackImage />
                                <Text home>{ element.name }  </Text>
                            </Link>
                        </View>
                    )
                });
            }
        }
    }
    render() {
        return (
            this.renderContainer()
        )
    }
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(Home)
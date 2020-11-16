import React  from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import ProfileAvatar from '../../ProfileAvatar';
import { View, Button } from '../../Styled';

const Profile = (props) => {
    const { token } = props.isAuth;
    if(token !== false){
        const { name, surname, avatar } = jwtDecode(token);
        return (
            <div>
                <View profileContainer>
                    <View profileAvatarContainer>
                        <ProfileAvatar avatar={avatar} />
                        <p>{name} {surname}</p>
                    </View>
                    <div>
                        <Button green> Create </Button>
                    </div>
                </View>
                <div>
                    here will be my all products
                </div>
            </div>
        )
    }else {
        return (
            <View homeLoad>
                <img src="/images/other/load.gif" alt=""/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps)(Profile)
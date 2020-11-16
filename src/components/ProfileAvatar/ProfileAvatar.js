import React from 'react';
import { Img } from '../Styled';

const ProfileAvatar = (props) => {
    const { avatar } = props;
    let path;
    if(avatar === 'default-user.png')
        path = 'http://localhost:4000/uploads/default'
    else
        path = 'http://localhost:4000/uploads/users'

    console.log(path)
    return (
        <div>
            <Img sign src={`${path}/${avatar}`}/>
        </div>
    )
}
export default ProfileAvatar;
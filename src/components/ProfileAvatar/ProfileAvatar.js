import React from 'react';
import { Img } from '../Styled';
import config from '../../helpers/config';

const ProfileAvatar = (props) => {
    const { avatar } = props;
    let path;
    if(avatar === 'default-user.png')
        path = `${config.baseFilesPath}/uploads/default`
    else
        path = `${config.baseFilesPath}/uploads/users`

    return (
        <div>
            <Img sign src={`${path}/${avatar}`}/>
        </div>
    )
}
export default ProfileAvatar;
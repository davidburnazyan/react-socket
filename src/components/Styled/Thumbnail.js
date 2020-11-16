import styled from 'styled-components';

const src = ({ src }) => {
    if(src) {
        return `
            width: 100%;
            object-fit: cover;
            cursor: pointer; 
        `
    }
}
const Thumbnail = styled.img`
    ${src}
`;

export default Thumbnail
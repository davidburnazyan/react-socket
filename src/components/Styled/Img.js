import styled from 'styled-components';

const sign = ({sign}) => {
    if(sign) {
        return`
            transition: .3s;
            width: 115px;
            height: 115px;
            cursor: pointer;
        `
    }
}
const Img = styled.img.attrs(props => props.src === true ? {src: props.src } : null)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    
    ${sign}       
`

export default Img;
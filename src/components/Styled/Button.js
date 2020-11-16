import styled from 'styled-components';

const submit = ({ submit }) => {
    if(submit){
        return `
            margin: 5px 0px;
        `
    }
}
const green = ({green}) => {
    if(green){
        return `
            background: green;
            color: white;
        `
    }
}
const Button = styled.button`
    background: none;
    font-weight: bold;
    font-size: 15px;
    width: 100%;
    border: 1px solid #d7d7d7;
    padding: 10px;
    border-radius: 7px;
    color: #616161;
    cursor: pointer;
    
    ${submit}
    ${green}
`

export default Button;
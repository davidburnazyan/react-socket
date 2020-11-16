import styled from 'styled-components';

const sign = ({ sign }) => {
    if(sign)
        return `
            padding: 9px;
            border: 1px solid #d7d7d7;
            border-radius: 7px;
            margin: 5px;
        `
}
const chatInput = ({ chatInput }) => {
    if(chatInput)
        return `
            width: 100%;
            border-radius: 2px;
            padding: 7px;
        `
}
const Input = styled.input`
    ${sign}
    ${chatInput}
`

export default Input;
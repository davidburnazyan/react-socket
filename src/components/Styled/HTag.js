import styled from 'styled-components';
const error404 = ({ error404 }) => {
    if(error404){
        return `
            min-height: calc(100vh - 40px);
            display: flex;
            font-size: 14vh;
            font-weight: 100;
            justify-content: center;
            align-items: center;
        `
    }
}
const signPageH1 = ({ signPageH1 }) => {
    if(signPageH1){
        return `
            margin: 50px 0px;
            text-align: center;
            font-weight: inherit;
        `
    }
}
const HTag = styled.h1`
    ${signPageH1}
    ${error404}
`

export default HTag;
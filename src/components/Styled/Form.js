import styled from 'styled-components';

const sign = ({sign}) => {
    if(sign){
        return`
            min-height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center; 
        `
    }
}

const Form = styled.form`
    ${sign}
`

export default Form;
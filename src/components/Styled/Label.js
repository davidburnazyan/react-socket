import styled from 'styled-components';

const Label = styled.label.attrs(({htmlFor}) => {
    return { 'htmlFor' : htmlFor }
})`
    margin: 7px;
    padding: 6px;
`

export default Label;
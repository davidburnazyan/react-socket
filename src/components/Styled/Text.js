import styled from 'styled-components';

const isHome = ({ home }) => {
    if(home){
        return `
            padding: 3px;
            margin: 50px 15px;
        `
    }
}
const pFirst = ({ pFirst }) => {
    if(pFirst){
        return `
            position: absolute;
            top: 0%;
            width: 100%;
            opacity: 0;
            background: #00000026;
            
            animation-name: start;
            animation-duration: 5s;
            animation-delay: 2s;
            
            @keyframes start {
                0% {
                    top: 0%;
                    opacity: 0;
                }
                10% {
                    top: 110%;
                    padding-top: 15px;
                    opacity: 1;
                    padding-bottom: 15px;
                }
                20% {
                    top: 100%;
                    padding-top: 15px;
                    opacity: 1;
                    padding-bottom: 15px;
                }
                
                90% {
                    top: 100%;
                    opacity: 1;
                }
                100% {
                    top: 0%;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    opacity: 0;
                }
            }
        `
    }
}
const pSecond = ({ pSecond }) => {
    if(pSecond){
        return `
            padding: 20px 40px;
            background: #00000026;
        `
    }
}
const Text = styled.p`
    text-align: center;
    color: #fff;
    
    ${isHome}
    ${pFirst}
    ${pSecond}
    
`

export default Text;

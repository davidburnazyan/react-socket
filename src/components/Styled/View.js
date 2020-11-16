import styled from 'styled-components'

const isProducts = ({ products }) => {
    if(products) {
        return `
            position: relative;
            border: 1px solid #d7d7d7;
            margin: 7px;
        `
    }
}
const productInfo = ({ productInfo }) => {
    if(productInfo) {
        return `
            display: flex;
            justify-content: space-between;
            color: white;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            padding: 0px 25px;
            background: linear-gradient(180deg,rgba(0, 0, 0, 0.18) 100%,rgba(0,0,0,0.4962359943977591) 100%);
        `
    }
}
const alterDivForInfo = ({ alterDivForInfo}) => {
    if(alterDivForInfo) {
       return `
            position: relative;
       `
    }
}
const flex = ({ flex }) => {
    if(flex) {
        return `
            position: fixed;
            display: flex;
            bottom: 0;
            left: 0;
            width: 100%;
            justify-content: space-around;
            padding: 15px;
            background: linear-gradient(180deg,rgba(0,0,0,0.18) 100%,rgba(0,0,0,0.4962359943977591) 100%);
        `
    }
}
const fixed = ({ fixed }) => {
    if(fixed) {
        return `
            width: 150px;
            position: relative;
            cursor: pointer;
        `
    }
}
const backImage = ({backImage}) => {
    if(backImage) {
        return`
            background-image: url("http://localhost:4000/uploads/products/${backImage}");
            background-attachment: fixed;
        `
    }
}
const backPhoneForBackImage = ({backPhoneForBackImage}) => {
    if(backPhoneForBackImage){
        let red = 0, green = 0, blue = 0, alpha = 0;
        let array = ['red', 'green', 'blue'];
        const random = Math.floor(Math.random() * array.length--)

        switch(array[random]){
            case 'red':
                red =  Math.floor(Math.random() * 255)
                alpha = Math.random() * .4
                break;
            case 'green':
                green =  Math.floor(Math.random() * 150)
                alpha = Math.random() * .4
                break;
            case 'blue':
                blue =  Math.floor(Math.random() * 255)
                alpha = Math.random() * .4
                break;
            default:
        }

        return`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: rgba(${red}, ${green}, ${blue}, ${alpha});
        `
    }
}
const signPage = ({ signPageH1 }) => {
    if(signPageH1){
        return`
            
        `
    }
}
const productImg = ({ productImg }) => {
    if(productImg){
        return`
            height: 100vh;
        `
    }
}
const labelAndInput = ({ labelAndInput }) => {
    if(labelAndInput){
        return`
            display: flex;
            justify-content: space-between; 
        `
    }
}
const alignButton = ({ alignButton }) => {
    if(alignButton){
        return `
            text-align: center;
        `
    }
}
const signUpImage = ({ signUpImage }) => {
    if(signUpImage){
        return`
            text-align: center;
        `
    }
}
const homeLoad = ({homeLoad}) => {
    if(homeLoad){
        return `
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            & > img {
                width: 150px;
                height: 150px;
            }
        `
    }
}
const center = ({ center }) => {
    if(center){
        return`
            display: flex;
            justify-content: center; 
            text-align: center;
        `
    }
}
const signInErrorMessages = ({errorMessages}) => {
    if(errorMessages){
        return `
            text-align: center;
            font-size: 13px;
            color: red;
        `
    }
}
const profileContainer = ({ profileContainer }) => {
    if(profileContainer){
        return `
            display: flex;
            justify-content: space-between;
        `
    }
}
const profileInfo = ({profileInfo}) => {
    if(profileInfo){
        return`
            padding: 15px;
            & > div > p {
                font-weight: bold;  
                line-height: 1.5;   
            }
        `
    }
}
const chatBar = ({chatBar}) => {
    if(chatBar){
        return `
            position: absolute;
            right: 0px;
            top: 15%;
            width: 50px;
            height: 50px;
            background: #d7d7d7;
        `
    }
}



const positionRight = ({positionRight}) => {
    if(positionRight){
        return `
            width: 25px;
            cursor: pointer;
            position: absolute;
            top: 20%;
            right: 5px;
        `
    }
}
const positionChat = ({positionChat}) => {
    if(positionChat){
        return`
            position: absolute;
            top: 25%;
            right: 10px;
            width: 400px;
            padding: 7px;
            background: #ffffff70;
        `
    }
}
const profileAvatarContainer = ({profileAvatarContainer}) => {
    if(profileAvatarContainer){
        return`
            margin: 10px;
        `
    }
}
const View = styled.div`
    ${productImg}
    ${isProducts}
    ${productInfo}
    ${alterDivForInfo}
    ${flex}
    ${fixed}
    ${backImage}
    ${backPhoneForBackImage}
    ${signPage}
    ${labelAndInput}
    ${alignButton}
    ${signUpImage}
    ${homeLoad}
    ${center}
    ${signInErrorMessages}
    ${profileContainer}
    ${profileInfo}
    ${chatBar}
    ${positionRight}
    ${positionChat}
    ${profileAvatarContainer}
`
export default View;
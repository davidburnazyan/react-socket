const initialState = {
    products: [],
    product: {},
    isAuth: {
        token: false,
        name: false
    },
    load: true
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuth: {
                   token: actions.payload.token,
                   name: actions.payload.name
                }
            }
        case 'LOAD_INFO_FOR_HOME':
            return {
                ...state,
                products: [
                    ...actions.payload
                ],
                load: false
            }
        case 'GET_PRODUCT_AND_MESSAGE':
            const { product, messages } = actions.payload
            return {
                ...state, product, messages, loader: false
            }
        default:
            return state;
    }
}

export default reducer;
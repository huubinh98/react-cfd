const initialValue = {
    getdataPro = {}
}

const productReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "GET_DATA_PRODUCT" :
            return {
                getdataPro: action.payload
            }
    }

    return state;

}

export default productReducer;
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    login: !!token,
    loginStatus: false,
};

const authenReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN":
            // handle data
            localStorage.setItem("token", JSON.stringify(payload));
            //update state
            return {
                login: !!token,
                loginStatus: true
            };
        case "REGIS":
            return {
                token: action.payload,
            };
        case "LOGOUT":
            localStorage.removeItem("token");
            return {
                login: !!token,
                loginStatus: false,
            };
        default:
            return state;
    }
};

export default authenReducer;

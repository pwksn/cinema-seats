const seatsTogetherReducer = (state = false, action) => {
    switch (action.type) {
        case "SEATS_TOGETHER":
            return !state;
        default: 
            return state;
    }
}

export default seatsTogetherReducer;
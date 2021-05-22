const seatsCounterReducer = (state = 1, action) => {
    switch (action.type) {
        case 'UPDATE_COUNT':
            return state = action.payload;
        default:
            return state;
    }
}

export default seatsCounterReducer;
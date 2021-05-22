export const updateSeatsCount = (value) => {
    return {
        type: 'UPDATE_COUNT',
        payload: value
    }
}

export const updateSeatsTogether = () => {
    return {
        type:'SEATS_TOGETHER'
    }
}
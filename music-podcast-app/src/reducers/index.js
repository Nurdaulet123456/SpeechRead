const initialState = {
    result: [],
    resultLoadingState: 'idle',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESULT_FETCHING':
            return {
                ...state,
                resultLoadingState: 'loading',
            }
        case 'RESULT_FETCHED': 
            return {
                ...state,
                result: action.playload,
                resultLoadingState: 'idle'
            }
        case 'RESULT_FETCHING_ERROR': 
            return {
                ...state,
                resultLoadingState: 'error',
            }
        default: return state
    }

}

export default reducer;
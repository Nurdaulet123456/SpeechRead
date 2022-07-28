export const resultfetching = () => {
    return {
        type: 'RESULT_FETCHING'
    }
}

export const resultfetched = (result) => {
    return {
        type: 'RESULT_FETCHED',
        playload: result
    }
}

export const resultfetchingerror = () => {
    return {
        type: 'RESULT_FETCHING_ERROR'
    }
}
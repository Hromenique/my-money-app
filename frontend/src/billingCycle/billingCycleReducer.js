const INITIAL_STATUE = { list: [] }

export default (state = INITIAL_STATUE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}
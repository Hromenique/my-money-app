import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'
const BILLING_CYCLES_URL = `${BASE_URL}/billingCycles`

export function getList() {
    const request = axios.get(BILLING_CYCLES_URL)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    axios.post(BILLING_CYCLES_URL, values)
    return {
        type: 'TEMP'
    }
}
import axios from 'axios'

export function leftOne() {
    return axios.get('/api/leftOne');
}

export function leftTwo() {
    return axios.get('/api/leftTwo');
}

export function leftThree() {
    return axios.get('/api/leftThree');
}
export function middleTwo() {
    return axios.get('/api/middleTwo');
}

export function rightOne() {
    return axios.get('/api/rightOne');
}

export function rightTwo() {
    return axios.get('/api/rightTwo');
}
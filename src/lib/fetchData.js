import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.api-ninjas.com/v1/dogs?name=`

const instance = axios.get(BASE_URL)

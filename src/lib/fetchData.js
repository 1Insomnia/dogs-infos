import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.api-ninjas.com/v1/dogs?name=`

const config = {
  headers: { 'X-Api-Key': API_KEY }
}

const fetchData = async name => {
  try {
    const { data } = await axios
      .get(`${BASE_URL}${name}`, config)
      .then(data => data)
      .catch(error => error)

    const [dataSet] = data

    return {
      data: dataSet,
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: error
    }
  }
}

export default fetchData

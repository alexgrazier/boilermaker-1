import axios from 'axios'

//ACTION TYPES
const GET_COMPANIES = 'GET_COMPANIES'

//ACTION CREATOR
const gotCompanies = companies => ({
  type: GET_COMPANIES,
  companies
})

//THUNK CREATOR
export const fetchCompanies = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/companies')
      dispatch(gotCompanies(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return action.companies
    default:
      return state
  }
}

import axios from "axios";


const initialState = {}

export const loadCat = data => ({type: 'LOAD_CAT', cat: data})

export const fetchCat = id => {
  return async(dispatch) => {
    const cat = (await axios.get(`/api/cats/${id}/`)).data
    dispatch(loadCat(cat))
  }
} 

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CAT' :
      return action.cat
    default: return state;
  }
}


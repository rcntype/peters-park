import axios from 'axios'


const initialState = []

export const loadCats = data => ({type: 'LOAD_CATS', cats: data})

export const fetchCats = () => async dispatch => {
    const cats = (await axios.get('/api/cats/')).data
    dispatch(loadCats(cats))
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CATS' : 
      return action.cats
    default: return state;
  }
}

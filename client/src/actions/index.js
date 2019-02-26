import axios from 'axios'
const FETCH_USER = "fetch_user"


// export const fetchUser = () => async dispatch =>{
//    const response = await axios.get('/api/current_user')
//     dispatch({
//         type: FETCH_USER,
//         payload : response.data
//     },
//     console.log('problem'))

// }


export const fetchUser = () => async dispatch =>{
    dispatch({ type: FETCH_USER, payload: await axios.get('/api/current_user').then(res=>res.data)

    })
}

export const handleToken = (token) =>async dispatch =>{
    const response = await axios.post('/api/stripe', token)
    dispatch({type: FETCH_USER, payload: response.data})
}
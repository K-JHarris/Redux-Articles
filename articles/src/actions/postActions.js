import { FETCH_POST, NEW_POST } from './types';

export const fetchPosts = () => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
            type: FETCH_POST,
            payload: posts
        }))
}

export default fetchPosts;
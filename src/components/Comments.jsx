import { useEffect, useState } from 'react';
import { fetchComments } from '../utils/fetchComments';

export default function Comments() {
    const [comments, setComments] = useState([])

    useEffect(() => { // this can't be a async function

        let ignore = false;

        async function startFetching() {
            const json = await fetchComments(1)
            if (!ignore) setComments(json) // this will call second time
        }
        startFetching();

        return () => { // function reference not call. It will be called when unmount
            ignore = true;
        }
    }, [])

    return (
        <ul style={{ display: 'flex', flexDirection: 'column' }}>
            {comments.map(comment => <li key={comment.id}>{comment.name}</li>)}
        </ul>
    )
}

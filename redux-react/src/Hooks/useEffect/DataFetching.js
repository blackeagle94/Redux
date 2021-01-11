import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [ posts, setPost ] = useState({});
    const [id, setId] = useState(1)
    const [idFriomButtonClick, setidFriomButtonClick] = useState(1)

    const handleClick = () => {
        setidFriomButtonClick(id)
    }
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => {
                console.log(res)
                setPost(res.data)
            })
			.catch((err) => console.log(err));
	}, [idFriomButtonClick]);
	return (
		<div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Get Post</button>
        <div>{posts.title}</div>
			{/* <ul>{posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul> */}
		</div>
	);
}

export default DataFetching;

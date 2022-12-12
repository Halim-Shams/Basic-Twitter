import React, {createContext, useState} from 'react';

const PostsContext = createContext();
const DB = 'https://reactpost-16e31-default-rtdb.firebaseio.com/post.json';

export const ContextProvider = ({children}) => {
	const [posteds, setPosteds] = useState([]);
	const posts = [];
	const fetchPosts = async () => {
		const postsResponse = await fetch(DB);
		const postsData = await postsResponse.json();
		for (const key in postsData) {
			posts.unshift({
				key: key,
				content: postsData[key].content,
			});
		}
		setPosteds(posts);
		console.log(posts);
	};
	const onPostHandler = async (post) => {
		const response = await fetch(DB, {
			method: 'POST',
			body: JSON.stringify(post),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		console.log(data);
	};
	return (
		<PostsContext.Provider value={{onPostHandler, fetchPosts, posteds}}>
			{children}
		</PostsContext.Provider>
	);
};

export default PostsContext;

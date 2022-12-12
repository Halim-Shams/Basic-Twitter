import React, {useEffect, useContext} from 'react';
import Post from './Post';
import PostsContext from '../Contexts/Context';

const Posts = () => {
	const {posteds} = useContext(PostsContext);
	const {fetchPosts} = useContext(PostsContext);
	useEffect(() => {
		fetchPosts();
	}, []);
	return (
		<div className='mx-auto lg:w-3/12 w-8/12'>
			{posteds.map((aPost) => (
				<Post content={aPost} />
			))}
		</div>
	);
};

export default Posts;

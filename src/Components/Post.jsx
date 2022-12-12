import React from 'react';

const Post = ({content}) => {
	return (
		<div className='px-3 w-full pt-3.5 pb-5 border-b-[0.5px] border-gray-300/70'>
			<p className='text-lg font-normal w-full leading-snug'>
				{content.content}
			</p>
		</div>
	);
};

export default Post;

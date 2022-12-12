import React, {useState, useContext} from 'react';
import PostsContext from '../Contexts/Context';

const Input = () => {
	const {onPostHandler} = useContext(PostsContext);
	const [postInput, setPostInput] = useState();
	const postChangeHDL = (e) => {
		setPostInput(e.target.value);
	};
	const postValue = postInput;
	const post = {
		content: postValue,
	};
	const postHandler = (e) => {
		e.preventDefault();
		if (postValue.length > 1) {
			onPostHandler(post);
			setPostInput('');
		} else if (postValue < 1) {
			alert('You have nothing to post!');
			console.log('please enter something to post!');
		}
	};

	return (
		<form
			onSubmit={postHandler}
			className='flex flex-col items-end w-8/12 gap-1.5 pt-12 mx-auto lg:w-3/12'>
			<textarea
				onChange={postChangeHDL}
				value={postInput}
				rows='6'
				type='text'
				placeholder='What is in your mind?'
				className='w-full px-3 outline-none focus:border-yellow-300 py-2.5 placeholder:font-extralight border rounded-lg bg-gray-50/40'
			/>
			<button
				onClick={postHandler}
				className='px-4 py-0.5 font-normal hover:bg-transparent border border-yellow-300 hover:border active:ring-2 ring-yellow-300 hover:border-yellow-400 transition-all ease-in-out bg-yellow-300 rounded-full'>
				Post
			</button>
		</form>
	);
};

export default Input;

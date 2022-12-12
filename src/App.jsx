import './App.css';
import Input from './Components/Input';
import Posts from './Components/Posts';
import {ContextProvider} from './Contexts/Context';

function App() {
	return (
		<ContextProvider>
			<div className='flex flex-col gap-12'>
				<Input />
				<Posts />
			</div>
		</ContextProvider>
	);
}

export default App;

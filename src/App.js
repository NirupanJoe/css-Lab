import { React } from 'react';
import './App.css';
import Logo from './components/logo';

const App = () =>
	<div className="App">
		<div>{Logo()}</div>
	</div>;

export default App;

import { React } from 'react';
import './App.css';
import Pendulum from './components/pendulum';

const App = () =>
	<div className="App">
		<div>{Pendulum()}</div>
	</div>;

export default App;

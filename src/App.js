import { React } from 'react';
import './App.css';
import Flex from './components/flexBox';
import FlexSelect from './components/flexBox/selectInput';

const App = () =>
	<div className="App">
		<div>{Flex()}</div>
		<div>{FlexSelect()}</div>
	</div>;

export default App;
